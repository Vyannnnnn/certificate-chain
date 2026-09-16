import { z } from "zod";

export const studentSchema = z.object({
  name: z.string().min(2),
  nim: z.string().min(3),
  email: z.email(),
});

export type CreateStudentInput = z.infer<typeof studentSchema>;
