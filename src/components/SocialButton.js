import React from 'react'

const SocialButton = (props) => {
  return (
    <div className="social-likes">
      <div className={props.serviceName}>{props.serviceName}</div>
    </div>
  )
}

export default SocialButton