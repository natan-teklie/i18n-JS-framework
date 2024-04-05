import React from 'react'
import { useTranslation } from 'react-i18next'

const Header = () => {
    const [t, i18n] = useTranslation("global")

    const handleChangeLanguage =()=>{
       
        i18n.changeLanguage(Lang)
    }
  return (
    <div>
        <h1>{t("header.message")}</h1>
        <button onChange={()=> handleChangeLanguage("en")}>en</button>
        <button onChange={()=> handleChangeLanguage("es")}>es</button>
    </div>
  )
}

export default Header




//if I want to watch the video look on the below
//https://www.youtube.com/watch?v=TlHk11Eftow&t=59s