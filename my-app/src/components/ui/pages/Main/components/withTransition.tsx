import React, { useState, useEffect } from "react";
import Loader from "./Loader";

const withTransition = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const loadData = async () => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setLoading(false);
      };

      loadData();
    }, []);

    return (
      <div>
        <Loader loading={loading} />
        {!loading && <WrappedComponent {...props} />}
      </div>
    );
  };
};

export default withTransition;
