import { pgTable, text, serial, integer, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { relations } from "drizzle-orm";
import { z } from "zod";

// Users table for potential future features like visitor tracking
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").unique().notNull(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Contact submissions table
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Visitor analytics table for tracking page views and interactions
export const visitorAnalytics = pgTable("visitor_analytics", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  pageView: text("page_view").notNull(),
  userAgent: text("user_agent"),
  ipAddress: text("ip_address"),
  referrer: text("referrer"),
  timeSpent: integer("time_spent"), // in seconds
  interactionData: jsonb("interaction_data"), // JSON data for clicks, scrolls, etc.
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Experience data table - for future dynamic content management
export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  company: text("company").notNull(),
  position: text("position").notNull(),
  period: text("period").notNull(),
  icon: text("icon").notNull(),
  iconColor: text("icon_color").notNull(),
  achievements: jsonb("achievements").notNull(), // JSON array of achievement objects
  skills: jsonb("skills").notNull(), // JSON array of skills
  displayOrder: integer("display_order").notNull().default(0),
  isActive: text("is_active").notNull().default("true"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Skills table for dynamic skill management
export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  level: integer("level").notNull(),
  description: text("description").notNull(),
  color: text("color").notNull(),
  icon: text("icon").notNull(),
  category: text("category").notNull().default("technical"), // technical, soft, tools
  displayOrder: integer("display_order").notNull().default(0),
  isActive: text("is_active").notNull().default("true"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Portfolio projects table
export const portfolioProjects = pgTable("portfolio_projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  iconColor: text("icon_color").notNull(),
  rarity: text("rarity").notNull(),
  rating: integer("rating").notNull(),
  technologies: jsonb("technologies"), // JSON array of technologies used
  displayOrder: integer("display_order").notNull().default(0),
  isActive: text("is_active").notNull().default("true"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const usersRelations = relations(users, ({ }) => ({
  // Add relations here if needed
}));

export const contactSubmissionsRelations = relations(contactSubmissions, ({ }) => ({
  // Add relations here if needed
}));

export const visitorAnalyticsRelations = relations(visitorAnalytics, ({ }) => ({
  // Add relations here if needed
}));

export const experiencesRelations = relations(experiences, ({ }) => ({
  // Add relations here if needed
}));

export const skillsRelations = relations(skills, ({ }) => ({
  // Add relations here if needed
}));

export const portfolioProjectsRelations = relations(portfolioProjects, ({ }) => ({
  // Add relations here if needed
}));

// Schema exports
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
});

export const insertVisitorAnalyticsSchema = createInsertSchema(visitorAnalytics).omit({
  id: true,
  createdAt: true,
});

export const insertExperienceSchema = createInsertSchema(experiences).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertSkillSchema = createInsertSchema(skills).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertPortfolioProjectSchema = createInsertSchema(portfolioProjects).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

export type InsertVisitorAnalytics = z.infer<typeof insertVisitorAnalyticsSchema>;
export type VisitorAnalytics = typeof visitorAnalytics.$inferSelect;

export type InsertExperience = z.infer<typeof insertExperienceSchema>;
export type Experience = typeof experiences.$inferSelect;

export type InsertSkill = z.infer<typeof insertSkillSchema>;
export type Skill = typeof skills.$inferSelect;

export type InsertPortfolioProject = z.infer<typeof insertPortfolioProjectSchema>;
export type PortfolioProject = typeof portfolioProjects.$inferSelect;
