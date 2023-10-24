import React from 'react'

const Footer = () => {
  const data = [
    {
      icon: "fas fa-fire-alt",
      name:"Treading"
    },
    {
      icon:"fas fa-film",
      name:"Movie"
    },
    {
      icon:"fas fa-film",
      name:"TV Series"
    },
    {
      icon:"fas fa-film",
      name:"Search"
    },

  ];
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 text-center bg-dark footer'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;