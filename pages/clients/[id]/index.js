import { useRouter } from "next/router";
import React from "react";

const ClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);

  const loadProjectHandler = () => {
    //do cool stuff
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: {
        id: "val",
        clientprojectid: "projecta",
      },
    });
    // router.push('/clients/max/projecta')
  };

  return (
    <div>
      <h1>The projects of a given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectPage;
