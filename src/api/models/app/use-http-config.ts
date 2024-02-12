export interface UseHttpConfig {
  url: string;
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  headers?: HeadersInit;
  body?: any;
}
