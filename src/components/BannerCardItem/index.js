// Write your code here.


import './src/components/BannerCardItem/index.css'

const BannerCardItem=(props)=>
{
const {BannerDetails , keyId}=props;
const{  headerText,description,className}=BannerDetails;
return(
    <li  className={className}>
        <h1>{headerTex}</h1>
        <p>{descriptio}</p>
    </li>


)
}
export default  BannerCardItem
