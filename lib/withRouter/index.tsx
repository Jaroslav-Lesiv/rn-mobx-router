import { observer, inject } from "mobx-react";
import React from "react";

const withRouter = (WrappedComponent: any) => {
  return inject("routerStore")(
    observer(
      class extends React.Component {
        render() {
          return <WrappedComponent {...this.props} />;
        }
      }
    )
  );
};

export default withRouter;
