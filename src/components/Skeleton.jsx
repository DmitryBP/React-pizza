import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="2" y="254" rx="9" ry="9" width="279" height="46" /> 
    <circle cx="133" cy="123" r="122" /> 
    <rect x="2" y="315" rx="5" ry="5" width="277" height="79" /> 
    <rect x="127" y="419" rx="22" ry="22" width="156" height="44" /> 
    <rect x="1" y="423" rx="5" ry="5" width="105" height="40" /> 
    <rect x="30" y="395" rx="0" ry="0" width="0" height="1" />
  </ContentLoader>
)

export default Skeleton