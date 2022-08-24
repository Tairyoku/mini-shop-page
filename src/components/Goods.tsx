import React from "react"
import { IGoods } from "../types"
import GoodsItem from "./GoodsItem"


const goods:IGoods[] = [
    {
        id: 34,
        name: 'Ноутбук Acer Nitro 5 AN515-57',
        imagePath: 'https://c.428.ua/img/3143222/3000/2000/noutbuk_acer_nitro_5_an515-57_nh_qeweu_004~1498~1140.jpg',
        price: 1000
},
{
    id: 35,
    name: 'Ноутбук Lenovo ThinkBook 15p G2 ITH',
    imagePath: 'https://f.428.ua/img/3389267/600/600/noutbuk_lenovo_thinkbook_15p_g2_ith_21b10023ra~837~732.jpg',
    price: 1200
},
{
    id: 36,
    name: 'Ноутбук MSI Katana GF66-11UD',
    imagePath: 'https://d.428.ua/img/3338115/3000/2000/noutbuk_msi_katana_gf66-11ud_gf6611ud-1050xua~1006~691.jpg',
    price: 1300
},

]


const Goods = () => {
return (
    <div className=" bg-slate-200 py-0.5">

        {goods.map(product => (
            <GoodsItem product={product} key={product.id} />
        ))}

    </div>
)
}



export default Goods