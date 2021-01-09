import { useState } from 'react'
import MenuProps from '../interfaces/MenuProps'

import './Menu.css'

export default function Menu({ links }: MenuProps) {
    const [activeMenu, setActiveMenu] = useState("Settings")
    return (
        <>
            <div className="mb-5">
                <h6 className="text-start fw-bold text-body mb-4 px-4">Menu</h6>
                {links.map(link => {
                    return (
                        <div role="button" className={`d-flex align-items-center mb-4 px-4 ${activeMenu === link.title ? "active-menu-item" : ""}`} key={link.title} onClick={() => setActiveMenu(link.title)}>
                            <img className="me-3" src={link.src} style={{ height: "23px" }} alt="link-symbol" />
                            <span style={{ fontSize: "18px" }}>{link.title}</span>
                        </div>
                    )
                })}
            </div>
            <div className="text-center mt-5">
                <button className="primary-button mt-5"> Upgrade Plan </button>
                <button className="secondary-button mt-3"> Contact Support </button>
            </div>
        </>
    )
}