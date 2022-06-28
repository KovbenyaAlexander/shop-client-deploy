import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ModalWindow from "../infoModal/Modal";

import * as yup from "yup";

import "./style.scss";

type FormValues = {
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

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    phone: yup.string().required(),
    agreement: yup.boolean().isTrue().required(),
  })
  .required();

const OrderDetails = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    setModalContent(data);
    setIsModalOpen(true);
  };

  const [deliveryType, setDeliveryType] = useState("delivery");
  const onChangeDeliveryHandler = (e: any) => setDeliveryType(e.target.value);

  const [paymentType, setPaymentType] = useState("cash");
  const onChangePaymentHandler = (e: any) => {
    setPaymentType(e.target.value);
  };

  const [deliveryTime, setDeliveryTime] = useState("asap");
  const onChangeDeliveryTimeHandler = (e: any) =>
    setDeliveryTime(e.target.value);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<FormValues>();

  return (
    <section className="order">
      <div className="wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className={
              errors.name || errors.phone
                ? "order__contacts order__contacts-error"
                : "order__contacts"
            }
          >
            <h3>Контактная информация</h3>
            <label htmlFor="name">
              <input
                className={errors.name ? "order__validation-err" : ""}
                id="name"
                type="text"
                placeholder="Имя*"
                {...register("name")}
              />
            </label>

            <label htmlFor="phone">
              <input
                className={errors.phone ? "order__validation-err" : ""}
                id="phone"
                type="text"
                placeholder="Телефон*"
                {...register("phone")}
              />
            </label>
          </div>

          <div className="order__delivery">
            <div className="order__delivery-checkbox">
              <label
                htmlFor="delivery"
                className={
                  deliveryType === "delivery" ? "order__radio-checked" : ""
                }
              >
                Доставка
                <input
                  {...register("typeOfDelivery")}
                  id="delivery"
                  name="typeOfDelivery"
                  type="radio"
                  value="delivery"
                  onClick={onChangeDeliveryHandler}
                  checked={deliveryType === "delivery"}
                />
              </label>

              <label
                htmlFor="pickup"
                className={
                  deliveryType === "pickup" ? "order__radio-checked" : ""
                }
              >
                Самовывоз
                <input
                  {...register("typeOfDelivery")}
                  id="pickup"
                  name="typeOfDelivery"
                  type="radio"
                  value="pickup"
                  onClick={onChangeDeliveryHandler}
                />
              </label>
            </div>

            {deliveryType === "delivery" && (
              <>
                <h3>Адрес доставки</h3>
                <div className="order__delivery-adress">
                  <input
                    id="street"
                    type="text"
                    placeholder="Улица"
                    {...register("street")}
                  />
                  <input
                    id="houseNumber"
                    type="text"
                    placeholder="№ дома"
                    {...register("houseNumber")}
                  />
                  <input
                    className="order__delivery-officeNumber"
                    id="officeNumber"
                    type="text"
                    placeholder="№ квартиры/офиса"
                    {...register("officeNumber")}
                  />
                  <input
                    className="order__delivery-entrance"
                    id="entrance"
                    type="text"
                    placeholder="Подъезд"
                    {...register("entrance")}
                  />
                  <input
                    className="order__delivery-floor"
                    id="floor"
                    type="text"
                    placeholder="Этаж"
                    {...register("floor")}
                  />
                  <input
                    className="order__delivery-comment"
                    id="comment"
                    type="text"
                    placeholder="Комментарий"
                    {...register("comment")}
                  />
                </div>
              </>
            )}

            {deliveryType === "pickup" && (
              <div className="order__delivery-pickup">
                <h3>Выберите адрес самовывоза</h3>

                <select {...register("pickupAdress")}>
                  <option value="г. Киев, ул. Космонавтов, д. 7, офис 5">
                    г. Киев, ул. Космонавтов, д. 7, офис 5
                  </option>
                  <option value="г. Киев, ул. Космонавтов, д. 7, офис 5">
                    г. Киев, ул. Космонавтов, д. 7, офис 5
                  </option>
                  <option value="г. Киев, ул. Космонавтов, д. 7, офис 5">
                    г. Киев, ул. Космонавтов, д. 7, офис 5
                  </option>
                  <option value="г. Киев, ул. Космонавтов, д. 7, офис 5">
                    г. Киев, ул. Космонавтов, д. 7, офис 5
                  </option>
                </select>
              </div>
            )}
          </div>

          <div className="order__payment">
            <h3>Способ оплаты</h3>

            <div className="order__payment-checkbox">
              <label
                htmlFor="online"
                className={
                  paymentType === "online" ? "order__radio-checked" : ""
                }
              >
                <input
                  {...register("typeOfPayment")}
                  type="radio"
                  name="typeOfPayment"
                  value="online"
                  id="online"
                  onClick={onChangePaymentHandler}
                />
                Онлайн
              </label>
              <label
                htmlFor="creditСard"
                className={
                  paymentType === "creditСard" ? "order__radio-checked" : ""
                }
              >
                <input
                  {...register("typeOfPayment")}
                  type="radio"
                  name="typeOfPayment"
                  value="creditСard"
                  id="creditСard"
                  onClick={onChangePaymentHandler}
                />
                Курьеру картой
              </label>
              <label
                htmlFor="cash"
                className={paymentType === "cash" ? "order__radio-checked" : ""}
              >
                <input
                  {...register("typeOfPayment")}
                  type="radio"
                  name="typeOfPayment"
                  value="cash"
                  id="cash"
                  checked={paymentType === "cash"}
                  onClick={onChangePaymentHandler}
                />
                Наличными
              </label>
            </div>
          </div>

          <div className="order__delivery-time">
            <h3>Когда доставить</h3>

            <div className="order__delivery-time-checkbox">
              <label
                htmlFor="asap"
                className={
                  deliveryTime === "asap" ? "order__radio-checked" : ""
                }
              >
                В ближайшее время
                <input
                  {...register("orderTime")}
                  id="asap"
                  name="orderTime"
                  type="radio"
                  value="asap"
                  onClick={onChangeDeliveryTimeHandler}
                  checked={deliveryTime === "asap"}
                />
              </label>

              <label
                htmlFor="customTime"
                className={
                  deliveryTime === "customTime" ? "order__radio-checked" : ""
                }
              >
                Ко времени
                <input
                  {...register("orderTime")}
                  id="customTime"
                  name="orderTime"
                  type="radio"
                  value="customTime"
                  onClick={onChangeDeliveryTimeHandler}
                />
              </label>

              {deliveryTime === "customTime" ? (
                <div className="order__time-custom">
                  <input
                    id="customTime"
                    type="datetime-local"
                    {...register("customTime")}
                  />
                </div>
              ) : (
                <p>Доставим через 40 минут</p>
              )}
            </div>
          </div>

          <div
            className={
              errors.agreement
                ? "order__agreement-error order__agreement "
                : "order__agreement"
            }
          >
            <input {...register("agreement")} type="checkbox" />
            <span>
              Я согласен на обработку моих перс. данных в соответствии с
              Условиями
            </span>
            <button type="submit">Оформить заказ</button>
          </div>
        </form>
      </div>

      <ModalWindow
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        userInfo={modalContent}
      />
    </section>
  );
};

export default OrderDetails;
