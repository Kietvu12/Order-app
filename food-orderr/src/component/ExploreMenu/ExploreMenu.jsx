import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id = 'explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Take a look at our diverse menu for the whole family featuring our great meals such as our hot and spicy curry and rice, bunny chows, Roti's and loads more, (please note our curries is hot if you prefer medium hot please confirm when making your order)Juicy burgers served with chips, chicken strips and chips, 2 pieces chicken schintzel with slice of cheese, cheese sauce, chips and onion rings and many more on our menu to choose. We trade daily from 9am till 9pm. Thank you so much for the amazing support and feedback. </p>
        <div className="explore-menu-lists">
            {menu_list.map((item, index)=>{
                return(
                    <div onClick={()=>setCategory(prev => prev === item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category === item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
    <hr />
    </div>
  )
}

export default ExploreMenu