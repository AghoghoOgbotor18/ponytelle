import { FaRegHeart, FaRegTrashAlt } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cart/cartSlice";

const Modal = ({ index, closeModal }) => {
  const dispatch = useDispatch();

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-[90%] max-w-md p-5 rounded-xl shadow-lg flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Remove from cart</p>
          <FiX
            size={20}
            className="cursor-pointer"
            onClick={closeModal}
          />
        </div>

        <p className="text-sm">
          Do you really want to remove this item from cart?
        </p>

        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center gap-4 rounded border border-[#281a17] py-2 px-3">
            <FaRegHeart /> Save for later
          </button>

          <button
            onClick={() => {
              dispatch(removeFromCart(index));
              closeModal();
            }}
            className="flex items-center justify-center gap-4 rounded bg-[#281a17] py-2 px-3 text-white"
          >
            <FaRegTrashAlt /> Remove Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
