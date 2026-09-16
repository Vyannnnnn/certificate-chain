import { z } from "zod";

export const createCertificateSchema = z.object({
  studentId: z.string(),
  certificateName: z.string().min(3, "Certificate name is required"),
});