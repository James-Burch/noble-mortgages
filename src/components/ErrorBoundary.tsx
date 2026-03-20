import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    if (process.env.NODE_ENV === "development") {
      console.error("ErrorBoundary caught:", error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            backgroundColor: "#2C3E50",
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          <h1
            style={{ color: "#4FD1C7", marginBottom: "1rem", fontSize: "2rem" }}
          >
            Something went wrong
          </h1>
          <p
            style={{ marginBottom: "2rem", maxWidth: "500px", lineHeight: 1.6 }}
          >
            We're sorry — an unexpected error occurred. Please try refreshing
            the page or returning to the homepage.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <button
              onClick={() => window.location.reload()}
              style={{
                backgroundColor: "#4FD1C7",
                color: "#FFFFFF",
                border: "none",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.75rem",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Refresh Page
            </button>

            <a
              href="/"
              style={{
                backgroundColor: "transparent",
                color: "#FFFFFF",
                border: "2px solid #FFFFFF",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.75rem",
                fontSize: "1rem",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Go to Homepage
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
