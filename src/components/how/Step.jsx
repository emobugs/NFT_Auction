import PropTypes from 'prop-types';

export default function Step() {
  return (
    <div>Step</div>
  )

  Step.PropTypes = {
    "number":PropTypes.number,
    "title": PropTypes.string,
    "description":PropTypes.string
   }

}
