<template>
  <div v-on:click="closePopup" class="popup">
    <div class="popup_wrap">
      <div v-if="!isInstaledMetaMask" class="popup_in popup-content">
        <img class="icon" src="../assets/img/pop-icon.svg" alt="" />
        <p>
          You need connect your Ethereum wallet to <br />
          sign messages and send transactions to Ethereum blockchain
        </p>
        <a
          href="https://metamask.io/download.html"
          target="_blank"
          class="btn btn-gold"
          >Connect METAMASK</a
        >
      </div>
      <div
        v-if="isInstaledMetaMask"
        class="popup_in popup_in--folow popup-content"
      >
        <vue-metamask userMessage="msg" @onComplete="onComplete"></vue-metamask>
        <div class="title">Folow steps</div>
        <div class="popup-folow">
          <div class="popup-folow-step">
            <img
              v-if="!isDeposit"
              src="../assets/img/loader.svg"
              alt=""
              class="icon-status"
            />
            <img
              v-if="isDeposit"
              src="../assets/img/check-color.svg"
              alt=""
              class="icon-status"
            />
            <div class="name">Deposit wBNB</div>
            <p>Send transaction to convert BNB to wBNB</p>
            <span v-if="!isDeposit" class="status">in progress...</span>
            <span v-if="isDeposit" class="status status-done">DONE</span>
          </div>
          <div class="popup-folow-step">
            <img
              v-if="!isApprove"
              src="../assets/img/check-gray.svg"
              alt=""
              class="icon-status"
            />
            <img
              v-if="isApprove"
              src="../assets/img/check-color.svg"
              alt=""
              class="icon-status"
            />
            <div class="name">Approve asset</div>
            <p>This transaction is conducted only once per asset</p>
            <span v-if="!isApprove" class="status">Start</span>
            <span v-if="isApprove" class="status status-done">DONE</span>
          </div>
          <div class="popup-folow-step">
            <img
              src="../assets/img/check-gray.svg"
              alt=""
              class="icon-status"
            />
            <div class="name">Place a bid</div>
            <p>Sign message to set place a bid</p>
            <span v-on:click="sentTransfer" class="status">Start</span>
          </div>
        </div>
        <button v-on:click="closePopupEvent" class="btn btn-empty">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VueMetamask from "vue-metamask";

export default {
  name: "Popup",
  props: ["closePopupEvent", "isActiveBid"],
  components: {
    VueMetamask,
  },
  data: function () {
    return {
      account: {},
      balance: false,
      isDeposit: false,
      isApprove: false,
      isBid: false,
      isInstaledMetaMask: typeof window.ethereum !== "undefined",
      msg: "This is demo net work",
    };
  },
  created() {
    console.log("created");
  },
  methods: {
    onComplete(data) {
      this.isInstaledMetaMask = true;
      this.isDeposit = true;
      this.isApprove = true;
      this.account = data;
      console.log("data:", data);
      const ffff = async () => {
        const { ethereum } = window;
        const balance = await ethereum.request({
          method: "eth_getBalance",
          params: [data.metaMaskAddress, "latest"],
        });
        console.log("balance", parseInt(balance).toFixed(4));
      };
      ffff();
    },

    sentTransfer: function () {
      const { web3, ethereum } = window;
      const transactionParameters = {
        to: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        from: ethereum.selectedAddress,
        value: web3.toWei(this.isActiveBid, "ether"),
      };

      ethereum
        .request({
          method: "eth_sendTransaction",
          params: [transactionParameters],
        })
        .then((txHash) => console.log(txHash))
        .catch((error) => console.error(error));
    },
    closePopup: function (e) {
      if (!e.target.closest(".popup-content")) {
        this.closePopupEvent();
      }
    },
  },
};
</script>

<style lang="scss">
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
  background: rgba(18, 18, 18, 0.9);
  z-index: 1000;
}

.popup_wrap {
  max-height: 100%;
  width: 100%;
  overflow: auto;
}

.popup_in {
  padding: 30px 30px 22px;
  margin: 0 auto;
  width: 382px;
  text-align: center;
  background: #1c1c1c;
  border: 1px solid #403f3b;
  box-sizing: border-box;
  text-align: center;
  color: #ffffff;
  p {
    font-size: 18px;
    line-height: 24px;
  }
  .icon {
    display: block;
    margin: 0 auto 30px;
  }
  .title {
    font-size: 36px;
    line-height: 43px;
    font-family: "Bebas Neue";
    margin: 0 0 21px;
    color: #ffffff;
  }
  .name {
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    padding: 0 0 0 51px;
    color: #ffffff;
  }

  .btn-empty {
    font-family: Bebas Neue;
    width: 100%;
    padding: 12px 10px;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    display: block;
    color: #dbc98b;
    border: 1px solid #404040;
    box-sizing: border-box;

    &:hover {
      background: #dbc98b;
      color: #000;
    }
  }
}
.popup_in--folow {
  text-align: left;
}
.popup-folow-step {
  position: relative;
  font-size: 16px;
  margin: 0 0 20px;
  line-height: 22px;
  color: #606060;
  p {
    padding: 0 0 0 51px;
  }
  .status {
    display: block;
    line-height: 50px;
    font-size: 20px;
    font-family: "Bebas Neue";
    margin: 20px 0 0;
    color: #000000;
    background: #363636;
    text-align: center;
    height: 50px;
  }
  .status-done {
    color: #000;
    background: #dbc98b;
  }
  .icon-status {
    position: absolute;
    top: 30px;
    left: 0;
    max-width: 30px;
    max-height: 30px;
    line-height: 30px;
    transform: translateY(-100%);
  }
}
</style>
