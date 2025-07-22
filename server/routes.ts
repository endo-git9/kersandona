import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactSubmissionSchema,
  insertVisitorAnalyticsSchema
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json(submission);
    } catch (error) {
      console.error('Contact submission error:', error);
      res.status(400).json({ error: "Invalid contact submission data" });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error('Get contact submissions error:', error);
      res.status(500).json({ error: "Failed to fetch contact submissions" });
    }
  });

  // Visitor analytics
  app.post("/api/analytics", async (req, res) => {
    try {
      const validatedData = insertVisitorAnalyticsSchema.parse(req.body);
      const analytics = await storage.createVisitorAnalytics(validatedData);
      res.json(analytics);
    } catch (error) {
      console.error('Analytics error:', error);
      res.status(400).json({ error: "Invalid analytics data" });
    }
  });

  app.get("/api/analytics", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
      const analytics = await storage.getVisitorAnalytics(limit);
      res.json(analytics);
    } catch (error) {
      console.error('Get analytics error:', error);
      res.status(500).json({ error: "Failed to fetch analytics" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
