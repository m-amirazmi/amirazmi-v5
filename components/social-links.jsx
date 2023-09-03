import React from 'react'

export default function SocialLinks({ className }) {
  return (
    <div className={className}>
      <a target="_blank" rel="nofollow" href="#">
        <i aria-hidden="true" className="fab fa-linkedin-in" />
      </a>
      <a target="_blank" rel="nofollow" href="#">
        <i aria-hidden="true" className="fab fa-github" />
      </a>
      <a target="_blank" rel="nofollow" href="#">
        <i aria-hidden="true" className="fa fa-envelope" />
      </a>
    </div>
  )
}
