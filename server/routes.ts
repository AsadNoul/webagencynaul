import type { Express } from "express";
import { createServer, type Server } from "http";
import { contacts, insertContactSchema } from "../shared/schema";

export function registerRoutes(app: Express): Server {
  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      // Lazy load db to ensure dotenv is loaded first
      const { db } = await import("./db");
      const contactData = insertContactSchema.parse(req.body);
      const [newContact] = await db.insert(contacts).values(contactData).returning();
      res.status(201).json(newContact);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Invalid contact data";
      console.error("Error creating contact:", error);
      res.status(400).json({ message });
    }
  });

  // Get all contacts (for admin)
  app.get("/api/contacts", async (_req, res) => {
    try {
      // Lazy load db to ensure dotenv is loaded first
      const { db } = await import("./db");
      const allContacts = await db.select().from(contacts);
      res.json(allContacts);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Error fetching contacts";
      console.error("Error fetching contacts:", error);
      res.status(500).json({ message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
