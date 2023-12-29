import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="Descriptionbox">
      <div className="Descriptionbox-navigator">
        <div className="Descriptionbox-nav-box">Description</div>
        <div className="Descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="Descriptionbox-discription">
        <p>
          An e-commenrce website is an online platfom that facilitates the
          buying and selling of products or services over the internet. serves
          as a virtual marketplace where bussinesses and individual showcase
          their products, intertact with customers, and conduct transactions
          without the need for a physical presence. E-commerce websites have
          gained immense popularity due to their conveince accessibility, and
          the global reach they offer.
        </p>
        <p>
          E-commerce websites typically display products or services a;along
          with detailed description, images, prices, and any available
          variations (e.g.sizes, colors). Each product usually has its own
          dedicated page with relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
