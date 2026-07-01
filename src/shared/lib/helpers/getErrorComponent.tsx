import { Error404 } from "@/shared/ui/ErrorStates/Error404";
import { Error500 } from "@/shared/ui/ErrorStates/Error500";
import { ErrorOffline } from "@/shared/ui/ErrorStates/ErrorOffline";

export function getErrorComponent(
  error: unknown, 
  onBackClick: () => void,
) {
  if (!error || typeof error !== "object" || !("status" in error)) return null;

  const status = error.status as string | number;

  switch (status) {
    case 404:
      return <Error404 onBackClick={onBackClick} />;
    case 500:
    case 503:
    case 504:
      return <Error500 />;
    case "FETCH_ERROR":
      return <ErrorOffline />;
    default:
      return (
        <div className="questions-page__error-state">
          ⚠️ Произошла неизвестная ошибка сети ({String(status)}).
        </div>
      );
  }
}

