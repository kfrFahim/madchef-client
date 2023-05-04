import React from "react";

const OurService = () => {
  return (
    <div className="mx-14">
      <h1 className="text-4xl font-medium mt-[80px]">OUR SERVICES</h1>
      <hr className="w-48 h-1 mx-auto my-10 bg-black" />

      <div className="grid grid-cols md:grid-cols-2 gap-5">
        <div className="w-full mx-auto border bg-slate-300 rounded-xl ">
          <figure className="px-10 pt-10">
            <img
              src="https://static.wixstatic.com/media/277bd845ae0546858b544b2592bdac23.jpg/v1/crop/x_47,y_0,w_460,h_338/fill/w_420,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Chef%20Preparing%20Meal.jpgg"
              alt="Shoes"
              className="rounded-xl mx-auto"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Private Chef Services</h2>
            <p>
              Have you ever dreamed of enjoying your beautiful vacation villa in
              Costa Rica without worrying about shopping, cooking, and cleaning
              up? Private Chef Costa Rica offers a selection of personal
              services catered to your specific culinary needs.
            </p>
          </div>
        </div>

        <div className="w-full bg-slate-300 rounded-xl border ">
          <figure className="px-10 pt-10">
            <img
              src="https://static.wixstatic.com/media/18b99c71512c4ec68808a504c921d9a4.jpg/v1/crop/x_107,y_0,w_1707,h_1280/fill/w_420,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Wedding%20Table.jpg"
              alt="Shoes"
              className="rounded-xl mx-auto"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Weddings & Events</h2>
            <p>
              We all know that the secret to hosting a successful event is
              inviting the right people and serving them incredible food. That’s
              why your team is so dedicated to working closely with you to
              create an unforgettable experience that will enhance your event
              and keep your guests talking about it for years to come. Contact
              us to start planning your perfect event today.
            </p>
          </div>
        </div>

        <div className="w-full bg-slate-300 rounded-xl border ">
          <figure className="px-10 pt-10">
            <img
              src="https://static.wixstatic.com/media/b4b2ad_b98f150c6fbd42f5a63f3421418b26c7~mv2.jpg/v1/crop/x_57,y_0,w_911,h_683/fill/w_420,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG-20220706-WA0007.jpg"
              alt="Shoes"
              className="rounded-xl mx-auto"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Floating Services</h2>
            <p>
              Want to try something innovative and Tasty? Floating Breakfast or
              Snacks is a beautiful and fun way to Enjoy Food and Good Flavors.
              We are here to ensure that it is never boring but always fresh and
              new! all our products are made-to-order, so the only thing you
              need to do is select your menu and serving time and enjoy in
              Paradise
            </p>
          </div>
        </div>

        <div className="w-full bg-slate-300 rounded-xl border ">
          <figure className="px-10 pt-10">
            <img
              src="https://static.wixstatic.com/media/nsplsh_784246546a724d49433063~mv2_d_4990_3025_s_4_2.jpg/v1/crop/x_478,y_0,w_4033,h_3025/fill/w_420,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Kobby%20Mendez.jpg"
              alt="Shoes"
              className="rounded-xl mx-auto"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Bartender Services</h2>
            <p>
              Whether you’re hosting a party or simply desperate for a fresh
              Cocktail menu, this service brings the most delicious and creative
              concepts straight to your Happy Hour, with no fuss involved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
