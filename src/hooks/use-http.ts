import { UseHttpConfig } from "../api/models/use-http-config";
import { useCallback, useState } from "react";

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = useCallback(
    async (httpConfig: UseHttpConfig, handleFn: (data: any) => void) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(httpConfig.url, {
          method: httpConfig.method || "GET",
          headers: httpConfig.headers ? httpConfig.headers : {},
          body: httpConfig.body ? JSON.stringify(httpConfig.body) : null,
        });

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();
        handleFn(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};
