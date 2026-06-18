import React from "react";

const Translate = () => {
  return (
    <div className="flex justify-end w-full text-black fixed top-[4.2rem] right-2 p-4 z-20">
      <select
        onChange={(e) => (window.location.href = e.target.value)}
        className="border border-black p-2 rounded-lg cursor-pointer "
      >
        <option value="https://ssp--limited-com.translate.goog/?_x_tr_sl=fr&_x_tr_tl=en&_x_tr_hl=en-US&_x_tr_pto=wapp">
          English
        </option>
        <option value="https://ssp--limited-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=en-US&_x_tr_pto=wapp">
          Spanish
        </option>
        <option value="https://ssp--limited-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en-US&_x_tr_pto=wapp">
          French
        </option>
        <option value="https://ssp--limited-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=de&_x_tr_hl=en-US&_x_tr_pto=wapp">
          German
        </option>
        <option value="https://ssp--limited-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=th&_x_tr_hl=en-US&_x_tr_pto=wapp">
          Thai
        </option>
        <option value="https://ssp--limited-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=ms&_x_tr_hl=en-US&_x_tr_pto=wapp">
          Malay
        </option>
      </select>
    </div>
  );
};

export default Translate;
