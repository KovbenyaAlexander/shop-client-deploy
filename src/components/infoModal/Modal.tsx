import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./style.scss";
import { useSelector } from "react-redux";
import { IFoodCard, IStore } from "../../types";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: any;
  userInfo?: {
    comment: string;
    customTime: string;
    entrance: string;
    floor: string;
    houseNumber: string;
    name: string;
    officeNumber: string;
    orderTime: string;
    phone: string;
    pickupAdress: string;
    street: string;
    typeOfDelivery: string;
    typeOfPayment: string;
    agreement: boolean;
  };
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalWindow = ({
  setIsModalOpen,
  isModalOpen,
  userInfo,
}: Props): JSX.Element => {
  const handleClose = () => setIsModalOpen(false);

  const foodCards = useSelector((state: IStore) => state.foodCards);
  const allCards = Object.values(foodCards).flat();
  const foodInCart = allCards.filter((card: IFoodCard) => card.inCart);

  const buyList = foodInCart.map((card: IFoodCard) => ({
    productId: card.id,
    name: card.name,
    price: card.price,
    orderSize: card.numberOfPurchase,
  }));

  const dataToSend = {
    userInfo,
    buyList: buyList,
  };

  const dataToSendJSON = JSON.stringify(dataToSend, null, 2);

  return (
    <Modal
      open={isModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <pre>{dataToSendJSON}</pre>
      </Box>
    </Modal>
  );
};

export default ModalWindow;
