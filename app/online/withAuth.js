// withAuth.js
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import Spinner from "../components/Spinner";

const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        console.log(user);
        if (!user) {
          router.replace("/");
        } else {
          setLoading(false);
        }
      });

      return () => unsubscribe();
    }, [router]);

    if (loading) {
      return <Spinner />;
    }

    return <WrappedComponent {...props} />;
  };

  // WithAuth.displayName = `WithAuth(${
  //   WrappedComponent.displayName || WrappedComponent.name || "Component"
  // })`;

  return WithAuth;
};

export default withAuth;
