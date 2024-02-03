import { z } from "zod";

export const userSchema = z.object({
  sendername: z.string().superRefine((val, ctx) => {
    if (val.length < 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "*Obligatory field*",
      });
    }
    if (val.length < 4) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Name must be at least 4 characters long",
      });
    }
    if (val.length >= 1000) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Name must be less than 1000 characters long",
      });
    }
  }),
  email: z
    .string()
    .min(1, {
      message: "*Obligatory field*",
    })
    .email({
      message: "Please enter a valid email",
    }),
  user_subject: z.string().superRefine((val, ctx) => {
    if (val.length < 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "*Obligatory field*",
      });
    }
    if (val.length < 4) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Subject must be at least 4 characters long",
      });
    }
    if (val.length >= 1000) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Subject must be less than 1000 characters long",
      });
    }
  }),
  message: z.string().superRefine((val, ctx) => {
    if (val.length < 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "*Obligatory field*",
      });
    }
    if (val.length < 4) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Text must be at least 4 characters long",
      });
    }
    if (val.length >= 1000) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Text must be less than 1000 characters long",
      });
    }
  }),
});
