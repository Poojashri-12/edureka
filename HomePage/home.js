let url = "http://localhost:5000/city"
let hotelUrl = "http://localhost:5000/hotels?category_id="


function test(){
    document.getElementById('coupon').style.visibility="visible"
    }

function closeDiv(){
    document.getElementById('coupon').style.visibility="hidden"
}

function getCity(){
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            let element = document.createElement('option')  //<option></option>
            let text = document.createTextNode(data[i].city_name) // Delhi
            element.appendChild(text) //<option>Delhi</option>
            element.value = data[i]._id //<option value="1">Delhi</option>
            document.getElementById('city').appendChild(element)
            /*<select>
                <option value="1">Delhi</option>
            </select>*/
        }
    })
}

const getHotel = () => {
    const cityId = document.getElementById('city').value;
    while(hotels.length>0) {
        hotels.remove(0)
    }

    fetch(`${hotelUrl}${cityId}`)
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            let element = document.createElement('option')
            let text = document.createTextNode(`${data[i].name} | ${data[i].city_name}`)
            element.appendChild(text)
            document.getElementById('hotels').appendChild(element)
        }
    })
}