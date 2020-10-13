<template>
    <div id="app">
        <div class="abc">
            <div class="room">
                <List2
                    :rooms="rooms"
                    @onSelect="onSelect"
                />
            </div>
            <div class="content">
                <div class="chat-container">
                    <Chat
                        v-if="visible"
                        :participants="participants"
                        :myself="myself"
                        :messages="messages"
                        :chat-title="chatTitle"
                        :placeholder="placeholder"
                        :colors="colors"
                        :border-style="borderStyle"
                        :hide-close-button="hideCloseButton"
                        :close-button-icon-size="closeButtonIconSize"
                        :submit-icon-size="submitIconSize"
                        :submit-image-icon-size="submitImageIconSize"
                        :load-more-messages="
                        toLoad.length > 0 ? loadMoreMessages : null
                    "
                        :async-mode="asyncMode"
                        :scroll-bottom="scrollBottom"
                        :display-header="true"
                        :send-images="true"
                        :profile-picture-config="profilePictureConfig"
                        :timestamp-config="timestampConfig"
                        :accept-image-types="'.png, .jpeg'"
                        @onMessageSubmit="onMessageSubmit"
                        @onType="onType"
                        @onClose="onClose('param value')"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Chat from "./components/Chat.vue";
import List2 from "@/components/List2";


export default {
    name: "app",
    components: {
        List2,
        Chat,
    },

    data() {
        return {
            isAuth: false,
            connection: null,
            visible: true,
            chatTitle: "Room 101",
            placeholder: "send your message",
            hideCloseButton: false,
            submitIconSize: 24,
            submitImageIconSize: 24,
            closeButtonIconSize: "20px",
            asyncMode: true,
            borderStyle: {
                topLeft: "0px",
                topRight: "0px",
                bottomLeft: "0px",
                bottomRight: "0px",
            },
            scrollBottom: {
                messageSent: true,
                messageReceived: true,
            },
            profilePictureConfig: {
                others: true,
                myself: true,
                styles: {
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                },
            },
            timestampConfig: {
                format: "HH:mm",
                relative: false,
            },
            colors: {
                header: {
                    bg: "#000000",
                    text: "#fff",
                },
                message: {
                    myself: {
                        bg: "#fff",
                        text: "#525252",
                    },
                    others: {
                        bg: "#000000",
                        text: "#fff",
                    },
                    messagesDisplay: {
                        bg: "#f7f3f3",
                    },
                },
                submitIcon: "#000000",
                submitImageIcon: "#000000",
            },
            rooms: [
                {text: 'Room 01', id: 'list-01'},
                {text: 'Room 02', id: 'list-02'},
                {text: 'Room 03', id: 'list-03'},
                {text: 'Room 01', id: 'list-04'},
                {text: 'Room 01', id: 'list-05'},
                {text: 'Room 01', id: 'list-06'},
                {text: 'Room 01', id: 'list-07'},
                {text: 'Room 01', id: 'list-08'},
                {text: 'Room 01', id: 'list-09'},
                {text: 'Room 01', id: 'list-10'},
                {text: 'Room 01', id: 'list-11'},
                {text: 'Room 01', id: 'list-12'},
                {text: 'Room 01', id: 'list-13'},
                {text: 'Room 01', id: 'list-14'},
                {text: 'Room 01', id: 'list-15'},
                {text: 'Room 01', id: 'list-16'},
            ],
            participants: [
                {
                    name: "Arnaldo",
                    id: 1,
                    profilePicture:
                        "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/NafSadh_Profile.jpg/768px-NafSadh_Profile.jpg",
                },
                {
                    name: "Adam",
                    id: 2,
                    profilePicture:
                        "https://lh3.googleusercontent.com/-G1d4-a7d_TY/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJPez_wX5UCJztzEUeCxOd7HBK7-jA.CMID/s83-c/photo.jpg",
                },
            ],
            myself: {
                name: "John Doe",
                id: 3,
                profilePicture:
                    "https://lh3.googleusercontent.com/-G1d4-a7d_TY/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJPez_wX5UCJztzEUeCxOd7HBK7-jA.CMID/s83-c/photo.jpg",
            },
            messages: [
                {
                    content: "Really?! I don't care! Haha",
                    participantId: 1,
                    timestamp: {
                        year: 2012,
                        month: 3,
                        day: 5,
                        hour: 20,
                        minute: 10,
                        second: 3,
                        millisecond: 123,
                    },
                    uploaded: true,
                    viewed: true,
                    type: "text",
                },
                {
                    content: "Really?! I don't care! Haha",
                    participantId: 1,
                    timestamp: {
                        year: 2012,
                        month: 3,
                        day: 5,
                        hour: 20,
                        minute: 10,
                        second: 3,
                        millisecond: 123,
                    },
                    uploaded: true,
                    viewed: true,
                    type: "text",
                },
                {
                    content: "Really?! I don't care! Haha",
                    participantId: 1,
                    timestamp: {
                        year: 2012,
                        month: 3,
                        day: 5,
                        hour: 20,
                        minute: 10,
                        second: 3,
                        millisecond: 123,
                    },
                    uploaded: true,
                    viewed: true,
                    type: "text",
                },
                {
                    content: "Hey, Jhon Doe! How are you today",
                    participantId: 1,
                    timestamp: {
                        year: 2012,
                        month: 3,
                        day: 5,
                        hour: 20,
                        minute: 10,
                        second: 3,
                        millisecond: 123,
                    },
                    uploaded: true,
                    viewed: true,
                    type: "text",
                },
                {
                    content: "Hey, Adam! I'm felling really fine this evening.",
                    participantId: 3,
                    timestamp: {
                        year: 2012,
                        month: 3,
                        day: 5,
                        hour: 20,
                        minute: 10,
                        second: 3,
                        millisecond: 123,
                    },
                    uploaded: true,
                    viewed: true,
                    type: "text",
                },
                {
                    content: "Really?! I don't care! Haha www.google.com",
                    participantId: 1,
                    timestamp: {
                        year: 2012,
                        month: 3,
                        day: 5,
                        hour: 20,
                        minute: 10,
                        second: 3,
                        millisecond: 123,
                    },
                    uploaded: true,
                    viewed: true,
                    type: "text",
                },
            ],
            toLoad: [
                {
                    content: "Hey, John Doe! How are you today?",
                    participantId: 2,
                    timestamp: {
                        year: 2016,
                        month: 3,
                        day: 5,
                        hour: 10,
                        minute: 10,
                        second: 3,
                        millisecond: 123,
                    },
                    uploaded: true,
                    viewed: true,
                },
                {
                    content: "Hey, Adam! I'm feeling really fine this evening.",
                    participantId: 3,
                    timestamp: {
                        year: 2016,
                        month: 1,
                        day: 5,
                        hour: 19,
                        minute: 10,
                        second: 3,
                        millisecond: 123,
                    },
                    uploaded: true,
                    viewed: true,
                },
            ],
        };
    },

    mounted: function () {
        let vuee = this;
        this.connection = new WebSocket("ws://35.186.150.95:8080");

        this.connection.onmessage = function (event) {
            var msg = JSON.parse(event.data);
            let TOPIC = msg.topic;
            switch (TOPIC) {
                case "CONNECTION":
                    if (vuee.isAuth == false) {
                        let ssoToken =
                            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJMb2dnaW5SZXF1ZXN0SUQiOiI0MzljNDhjYS00ZDA5LTRhMjUtOGFlZC0yMzI0YWY3ODkwZmEiLCJVc2VySUQiOjEwMDQsIlVzZXJBZ2VudCI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS84OC4wLjQyODMuMCBTYWZhcmkvNTM3LjM2XzdlYjIyOGMwLTAyMDEtMTFlYi1hYjA0LWMxN2NhOTliYTdkNiIsIkFwcEtleSI6IiIsIkxvZ2luVGltZSI6MTYwMTk2Nzg0MCwiZXhwIjoxNjAyNTcyNjQwfQ.tXdFIfmfhnohaQDEQeKjGg2riu9-RUWcWOvSV4q4Ci4";
                        let dt = {
                            topic: "AUTHORIZATION_V2",
                            content: {
                                ssoToken: ssoToken,
                            },
                        };
                        vuee.connection.send(JSON.stringify(dt));
                        vuee.isAuth = true;
                    }

                    break;

                case "MESSAGE":
                    vuee.addMessage(msg.content.message);
                    break;

                case "AUTHORIZATION_V2":
                    if (msg.content.status != "OK") {
                        console.log("AUTH FAIL");
                    }

                    break;

                default:
                    break;
            }
        };

        this.connection.onopen = function (event) {
            console.log("Successfully connected to the websocket server...");
        };
    },

    methods: {

        onType: function (e) {
            // eslint-disable-next-line
            // console.log("typing");
        },

        loadMoreMessages(resolve) {
            setTimeout(() => {
                resolve(this.toLoad);
                //Make sure the loaded messages are also added to our local messages copy or they will be lost
                this.messages.unshift(...this.toLoad);
                this.toLoad = [];
            }, 1000);
        },

        onSelect(args) {
            // console.log(args)
            alert(args.data.id)
        },

        onMessageSubmit(message) {
            /*
             * example simulating an upload callback.
             * It's important to notice that even when your message wasn't send
             * yet to the server you have to add the message into the array
             */
            this.messages.push(message);

            let msg = {
                topic: "MESSAGE",
                content: {
                    chatRoomId: "5f76e896e2d51c70c5a70696",
                    message: "Hello from vuejs: " + message.content,
                    fromUserId: "1004",
                },
            };

            this.connection.send(JSON.stringify(msg));

            /*
             * you can update message state after the server response
             */
            // timeout simulating the request
            setTimeout(() => {
                message.uploaded = true;
                message.viewed = true;
            }, 2000);
        },

        onClose(param) {
            console.log(param);
            this.visible = false;
        },

        addMessage(msg) {
            this.messages.push({
                content: msg,
                // myself: false,
                participantId: 1,
                timestamp: {
                    year: 2015,
                    month: 3,
                    day: 5,
                    hour: 20,
                    minute: 10,
                    second: 3,
                    millisecond: 123,
                },
                uploaded: true,
                viewed: true,
            });
        },
    },
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000000;
    margin-top: 10px;
}

.abc {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    align-content: center;
    alignment: center;
}

.room {
    width: 25%;
    display: block;
    text-align: start;
    height: 600px;
    border: black;
    border-style: solid;
}

.content {
    width: 50%;
    display: block;
    align-items: center;
    border: black;
    border-style: solid;
}

.chat-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(247, 243, 243);
    height: 600px;
    width: 100%;
}
</style>
