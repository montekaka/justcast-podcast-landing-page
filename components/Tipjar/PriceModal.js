import { execOnce } from 'next/dist/next-server/lib/utils';
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TipjarPrice from './TipjarPrice'

const PriceModal = ({title, message, prices, modal, slug, toggle, handlePriceClick}) => {
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>
        {
          message ? <p>{message}</p> : prices.map(price => <TipjarPrice key={price.id} id={price.id} slug={slug} product_currency_code_value={price.product_currency_code_value} price={price.unit_amount} handlePriceClick={handlePriceClick}/>)
        }
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle} size="sm">Close</Button>
      </ModalFooter>
    </Modal>
  )
}

export default PriceModal;