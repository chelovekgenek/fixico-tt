import * as Yup from "yup";
import { IReviewDraft } from "store/entities/reviews/types";

export const schema = Yup.object().shape<IReviewDraft>({
  body: Yup.string()
    .min(2)
    .max(32)
    .required(),
  rating: Yup.number()
    .min(0)
    .max(5)
    .required()
});

export const initialValues: Yup.InferType<typeof schema> = {
  body: "",
  rating: 0
};
