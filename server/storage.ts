import { 
  users, 
  contactSubmissions, 
  visitorAnalytics,
  type User, 
  type InsertUser,
  type ContactSubmission,
  type InsertContactSubmission,
  type VisitorAnalytics,
  type InsertVisitorAnalytics
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact submission methods
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  // Visitor analytics methods
  createVisitorAnalytics(analytics: InsertVisitorAnalytics): Promise<VisitorAnalytics>;
  getVisitorAnalytics(limit?: number): Promise<VisitorAnalytics[]>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }
  
  // Contact submission methods
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const [contactSubmission] = await db
      .insert(contactSubmissions)
      .values(submission)
      .returning();
    return contactSubmission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
  }
  
  // Visitor analytics methods
  async createVisitorAnalytics(analytics: InsertVisitorAnalytics): Promise<VisitorAnalytics> {
    const [visitorAnalytic] = await db
      .insert(visitorAnalytics)
      .values(analytics)
      .returning();
    return visitorAnalytic;
  }

  async getVisitorAnalytics(limit = 100): Promise<VisitorAnalytics[]> {
    return await db.select()
      .from(visitorAnalytics)
      .orderBy(desc(visitorAnalytics.createdAt))
      .limit(limit);
  }
}

export const storage = new DatabaseStorage();
