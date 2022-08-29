import React from "react"
import "./Header.css"


// export const Header = ({title, subTitle}) => {
//     return (
//         <section>
//             <div style={{ backgroundImage: `url(${Banner})`,
//                 backgroundRepeat: 'no-repeat',
//                 backgroundPosition: 'center',
//                 backgroundSize: 'cover'}}>

//                 <div className="container" style={{minHeight: '550px'}}>
//                     <div className="text-center justify-content-center align-self-center">
//                         <h1 className="pt-5 pb-3">{title}</h1>
//                         <h5>{subTitle}</h5>
//                     </div>
//                 </div>
//             </div>
//             <h1 className="app-heading">Rancid Tomatillos</h1>
//         </section>
//     )
// }

const Header = () => {
    return (
        <header className="header">
            <div className="image">
                <h1 className="app-heading">Rancid Tomatillos</h1>
            </div>
        </header>
    )
}

export default Header