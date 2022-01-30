import React, { useState } from "react";


function NFT3d() {

    // Retrieve Lazy Minted NFT's from Rarible
    async function retrieveLazy () {
        const response = await fetch('https://ethereum-api.rarible.org/v0.1/nft/items/byOwner?owner=0x868e35847A7F23832137f4eFB92436159a9AC6A1')
      
        let data = await response.json()
        console.log(data)
      
        for (let i = 0; i < data.items.length; i++) {
          if (data.items[i].lazySupply !== "0" && data.items[i].meta.name.includes("3D NFT:")) {
            console.log(data.items[i])
            console.log(i)

            // Create card elements
            const new3DNFT = document.createElement("div")
            const nftLink = document.createElement("a")
            const nftPhoto = document.createElement("div")
            const nftTitle = document.createElement("div")
            const nftDescription = document.createElement("div")

            // Add classes to elements
            new3DNFT.classList.add("threed-card")
            nftPhoto.classList.add("threed-card__photo")
            nftTitle.classList.add("threed-card__title")
            nftDescription.classList.add("threed-card__description")

            // Populate inner HTML with Meta Data
            nftTitle.innerHTML = `${data.items[i].meta.name}`
            nftDescription.innerHTML = `${data.items[i].meta.description}`
            nftPhoto.innerHTML = "3D"

            // Add link to placeholder image
            nftLink.href = `https://rarible.com/token/${data.items[i].id}`
            nftLink.target = "_blank"

            // Append elements to container
            nftLink.append(nftPhoto)
            new3DNFT.append(nftLink)
            new3DNFT.append(nftTitle) 
            new3DNFT.append(nftDescription)
            document.querySelector(".threed-nft-container").append(new3DNFT)
          }
        }
      
    }
      
        retrieveLazy ()
    return (
        <>
        <div className="threed-nft-container">
            
        </div>
        </>
    )
}

export default NFT3d;