
import { useNavigate } from "react-router";
import type { Route } from "./+types/404";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "404 - Page Not Found" },
    { 
      name: "description", 
      content: "The page you are looking for doesn't exist or has been moved." 
    },
    { name: "robots", content: "follow, noindex" },
  ];
}

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background text-foreground">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2"
        >
          
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
