import { Skeleton } from "@/shared/ui/Skeleton/Skeleton/Skeleton";
import "./QuestionDetailsSkeleton.css";

export function QuestionDetailsSkeleton() {
  return (
    <div className="question-details-skeleton">
      <Skeleton height="36px" width="70%" />
      <Skeleton height="38px" width="80px" />
      <Skeleton
        height="24px"
        width="160px"
        className="question-details-skeleton__h3"
      />
      <Skeleton height="120px" width="100%" />
      <Skeleton
        height="24px"
        width="180px"
        className="question-details-skeleton__h3"
      />
      <Skeleton height="300px" width="100%" />
    </div>
  );
}
