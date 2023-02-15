import "./How.module.scss";
import PropTypes from "prop-types";

export default function How({items = []}) {
  return <div>How</div>;

  How.PropTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
    items: [
      {
        title: PropTypes.string,
        description: PropTypes.string,
      },
    ],
    link: PropTypes.string,
  };
}
