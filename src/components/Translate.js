import React from "react";

const Translate = () => {
  return (
    <div className="fixed top-[5.5rem] lg:top-[5rem] right-2 sm:right-4 z-30 flex justify-end">
      <select
        onChange={(e) => (window.location.href = e.target.value)}
        className="bg-white border border-black p-2 text-xs sm:text-sm rounded-lg cursor-pointer shadow-sm outline-none"
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
        <option value="https://ssp--limited-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=it&_x_tr_hl=en-US&_x_tr_pto=wapp">
          Italian
        </option>
        <option value="https://ssp--limited-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=zh-CN&_x_tr_hl=en-US&_x_tr_pto=wapp">
          Chinese
        </option>
      </select>
    </div>
  );
};

export default Translate;
