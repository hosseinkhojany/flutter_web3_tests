'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "de3779d83fac85dd81f3eefe29513da3",
"index.html": "a927e5670b3f55e4027cfd9a97d0cd1a",
"/": "a927e5670b3f55e4027cfd9a97d0cd1a",
"main.dart.js": "e623f3ddb186ba814a2da6b8df9e9574",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "10920250b98594cd66697b245b2d172b",
"assets/AssetManifest.json": "81febe0352baa23e5502b39ff1bca326",
"assets/NOTICES": "f22dd3ddea5674c8dde43f124a31d0f1",
"assets/FontManifest.json": "bf85a754c186c6f43fe3909f5c120da0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/petal.svg": "76c9cfa1bfefb298416cfef6a13a70c5",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/tomtomgo.svg": "493b0844a3218a19b1c80c92c060bba7",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/myelin_logo.png": "06bd0c35c355439efd85b44098b486e3",
"assets/assets/images/png/health_record_main.jpg": "3bbd460a17e1e6814c41faaa68ecc6d3",
"assets/assets/images/png/logo-dark.png": "bef2a942d88bf1a66a10938b0457e635",
"assets/assets/images/png/telegram.png": "d8b2885a751950c285469fa5d604be3b",
"assets/assets/images/png/Me-and-MS.png": "1032d3d70d6874778d3e2af38811ea2e",
"assets/assets/images/png/sms.png": "f1bad2ec8574d30825f5ebb9b59fd24b",
"assets/assets/images/png/logo-01.png": "5fb488bf77ecd26cb8a0c870112729f3",
"assets/assets/images/png/time.png": "54734391f6b9019470870df8a7e9684c",
"assets/assets/images/png/user_avatar.png": "1e8161a236e24a4c1a06ba2e33c910fb",
"assets/assets/images/png/01Syringe.png": "72e23ff6cce7319c25a9f1d7399917c9",
"assets/assets/images/png/liquid_loading.gif": "ad6081c3a4a6744081f60f743317fa50",
"assets/assets/images/png/yoga_main.jpg": "e28940f2fa84dff9b4e671c1bc0b402e",
"assets/assets/images/png/Earth-01.png": "ea25f888617166673a318ab51abb449a",
"assets/assets/images/png/instagram.png": "ca8807b8e61b6e9c49177c4c88e3df4c",
"assets/assets/images/png/meditation.jpg": "60e282e6fca61edd69b0333dea7c965b",
"assets/assets/images/png/meditation.png": "b88b83314ea21c0fe84394b4dab9a85e",
"assets/assets/images/png/camera_background.jpg": "d55c9bd064ee1600c62360e351b69d91",
"assets/assets/images/png/splash-bg.png": "36d0a653126290da1ff6dfbb63f899f3",
"assets/assets/images/png/health_record_header.jpg": "4afddf4b7e7124b1c012d27ae7874d39",
"assets/assets/images/png/Meditation1.png": "f0c5d09ea6c2bf7fb79c45929e210e3a",
"assets/assets/images/png/Yoga1.png": "28ad0d767a3c6c5b8db39713788d33fd",
"assets/assets/images/png/trash_cover.png": "919ff01d6f355f8440946543f2c0c998",
"assets/assets/images/png/woman_image.png": "357b91dd85e50f2eb7ffec1f695c81e9",
"assets/assets/images/png/update_new.png": "2788d0b20a34c27bc1fd3a048f9c57ec",
"assets/assets/images/png/Rectangle-32.png": "b9e966cc1b550f787c144b48f460030e",
"assets/assets/images/png/connect.png": "bb8b7e93a1b1ea81d4b1375dc1a9901f",
"assets/assets/images/png/Background.png": "68d4d0e6ac4a03dfb9e5dba619a5e53d",
"assets/assets/images/png/meditation_home.png": "31ac07da079d6efd0f48689a7ca99095",
"assets/assets/images/png/bookmarkLogo.png": "54c3b52df8582c519d13919527ca16a9",
"assets/assets/images/png/ic_bg_slider_1.png": "07718de39622632f9be1bac35ebd7b1f",
"assets/assets/images/png/Venus-01.png": "d661f600dacfc9fe903492a107a4515d",
"assets/assets/images/png/man.png": "9ef76d477915075fa44cd22725f6d71b",
"assets/assets/images/png/profile_confirmed.png": "7df3e915a851b98b220703cffadaa320",
"assets/assets/images/png/yoga_header.jpg": "d6c746a775eeed312bb6b97981d3071c",
"assets/assets/images/png/ic_bg_slider_3.png": "229c7525414c4c5ca445b10e10d89c31",
"assets/assets/images/png/ic_reminder_pill_red.png": "d70fe46d9fb65585f8e03ca8f278d1b1",
"assets/assets/images/png/ic_bg_slider_2.png": "b214eef94ae7cdd2ff018b0213ec4d4f",
"assets/assets/images/png/logo.png": "5e0d61725e6182c7a74adab36bb82022",
"assets/assets/images/png/Rectangle-39.png": "fd6d3f68f9df61b9169282f5b77d7de8",
"assets/assets/images/png/ic_bg_slider_6.png": "13dd28906eb9f0b7655510f9da3be95f",
"assets/assets/images/png/meAndMs.png": "58a6d90a42c05387894ce7199974d00e",
"assets/assets/images/png/linkedin.png": "c71c49fece65a2adb6fd991586658753",
"assets/assets/images/png/favoriteLogo.png": "82fcfabd9b44809c1bdf980bfff7f7bd",
"assets/assets/images/png/ic_bg_slider_5.png": "067acdd8250a07500a853ff1cc582ba0",
"assets/assets/images/png/ic_reminder_injection_red.png": "28f7cd06bf75f019ca457f1a0ed23a7a",
"assets/assets/images/png/ic_bg_slider_4.png": "60cf3e3f1d76de8b6ccea34d4ca82807",
"assets/assets/images/png/calender-dark.png": "7df48a897708fed326f1069e02e34682",
"assets/assets/images/png/exclamation_glass.png": "d88e99e1e0339abd7e457ac1599d44f7",
"assets/assets/images/png/edit.png": "4830dbb1076822c2fc7aedae27c1989d",
"assets/assets/images/png/Moon-01.png": "ff5947d380cbbfaffeb7a0dacf628317",
"assets/assets/images/png/whatsapp.png": "a21b8b7927a773580d92854993f2c919",
"assets/assets/images/png/icon_glass_close.png": "5b96df4286680386dccba60849d7b2f1",
"assets/assets/images/png/ic_reminder_injection_white.png": "00fc3eb1e4288b16eda9efde7ca2bed5",
"assets/assets/images/png/yoga.jpg": "85808340d2b5e39188f3ec6f596511f0",
"assets/assets/images/png/ic_reminder_pill_white.png": "93361d0afea730c02b10b569d9dcc5fc",
"assets/assets/images/png/profile_not_confirmed.png": "ac94c2ae4069f2888c2b425f2517af0e",
"assets/assets/images/png/03Capsule.png": "fbd9a5df67d352ee44c63332516d9083",
"assets/assets/images/png/ic_reminder_check.png": "e12cd35926184d5e14225b7108b56005",
"assets/assets/images/png/trash_container.png": "b973afab6af60636432944e7b70bd2cc",
"assets/assets/privacy_and_policy.json": "0ff798f0a4dcbca7bad0fe00b542431e",
"assets/assets/vectors/svg/search.svg": "f586ac9b31086eac1e8ab25cadd3f5f5",
"assets/assets/vectors/svg/ic_settings_1.svg": "4972ac17b5d895f20a590befbce33b80",
"assets/assets/vectors/svg/ic_category_2.svg": "e044b3d3b3870baa10dc08096fe6ddc3",
"assets/assets/vectors/svg/note-other.svg": "ba7171e624730e0d9d0a5cb7e253c8de",
"assets/assets/vectors/svg/add-frindes.svg": "0fcd9e0895d549d08d4774d2b6021a94",
"assets/assets/vectors/svg/Iconly-Bold-Calendar.svg": "5bc70afabc179c96fe8609bec4e89e39",
"assets/assets/vectors/svg/capsule.svg": "d5b53a7ca7884dfaff02a388a6ba50ed",
"assets/assets/vectors/svg/ic_drawer_1.svg": "e16041c4adb80bf6a8a4e8ffc91566af",
"assets/assets/vectors/svg/info-square.svg": "1d01fac61e3fba83558e023947b89a32",
"assets/assets/vectors/svg/request_friend_new.svg": "6f5aaeec543b5a63536df986cc68df60",
"assets/assets/vectors/svg/time-Square.svg": "2ea975f2a79bdea14906854a709bedcc",
"assets/assets/vectors/svg/info_input.svg": "e41aa1f9c30b2908f8c9107c521a4cf2",
"assets/assets/vectors/svg/ic_category_3.svg": "0918416a97a75ff7c154f03c19178a99",
"assets/assets/vectors/svg/clamp.svg": "74aa67dcafed6e85e53adc3aa39249bd",
"assets/assets/vectors/svg/ic_about_us_1.svg": "b7f841da60442e5ac6130eda54b32c0d",
"assets/assets/vectors/svg/ic_chevron_down_rounded.svg": "12fc7ee82c0ff30a5b9ac6af4c453f66",
"assets/assets/vectors/svg/ic_about_us_3.svg": "710d176c9ac332610cd192bf7afb1ad8",
"assets/assets/vectors/svg/ic_settings_2.svg": "ab0e3fa157b08351e5c7028aaa414960",
"assets/assets/vectors/svg/ic_category_1.svg": "78561725a88731ecba445273d2cccf52",
"assets/assets/vectors/svg/information_new.svg": "7ee0e58fd50ba280d37cd69b4ef68f36",
"assets/assets/vectors/svg/ic_drawer_2.svg": "122f848c2a5b9d251f0d90e01c473851",
"assets/assets/vectors/svg/Iconly-Light-3%2520User.svg": "84e25eaea3e957fdcc8fec67fa4c26f0",
"assets/assets/vectors/svg/Iconly-Bold-Location.svg": "d2ac92b6ca819cb2a82718da070f6fe8",
"assets/assets/vectors/svg/ic_drawer_3.svg": "bc5f820b31f16670bf79bdb4b75b5040",
"assets/assets/vectors/svg/Iconly-Light-Close-Square.svg": "c1c0db1a3643241fd188ebde0dceeba1",
"assets/assets/vectors/svg/delete-friend.svg": "22bda861e2a3298c27db879e9c8a6b3f",
"assets/assets/vectors/svg/user.svg": "b170743bb207cb8c9693bec2af1868ab",
"assets/assets/vectors/svg/ic_no_signal.svg": "54c5c0369d8a2780201a9d8eb8038e6d",
"assets/assets/vectors/svg/ic_base_page_menu.svg": "5ebc93e1a3c26992fe16b49f18cc9b54",
"assets/assets/vectors/svg/ic_settings_3.svg": "89dadd2ca1023bd2816427f00ea07e8d",
"assets/assets/vectors/svg/ic_about_us_2.svg": "93875fa1b80894cf661d5cec138c47d9",
"assets/assets/vectors/svg/gradient_camera.svg": "ccda7d5b7bb2ef600f5beb9c99a0e498",
"assets/assets/vectors/svg/exclamation_new.svg": "afbabd137c67428fa3f881a9cb6444f5",
"assets/assets/vectors/svg/person.svg": "3fa7b545a99dd713106f5459b740aec3",
"assets/assets/vectors/svg/Group%2520549.svg": "05792537953ea66d6f5d4bb90a41c05b",
"assets/assets/vectors/svg/home.svg": "e57446a30b9f0314e6d61d812ef7d3ca",
"assets/assets/vectors/svg/disconnect.svg": "48e98e03a6604204e15b43ecd93967fc",
"assets/assets/vectors/svg/ic_category_4.svg": "2032f2a1b5724b7ca3909917038b34b4",
"assets/assets/vectors/svg/filter_selected.svg": "e699db6e96cbb96aea74c86ca4bb32d6",
"assets/assets/vectors/svg/standing.svg": "9252817cb59432d954e63a8146c3b4a0",
"assets/assets/vectors/svg/Iconly-Light-Star.svg": "b4a09189273e7e91beaf7e31c67830f1",
"assets/assets/vectors/svg/cancel.svg": "c0507be2ef508119347e545c7e531488",
"assets/assets/vectors/svg/ticket.svg": "f3a23eef2be499aa63d5fc2475f09f57",
"assets/assets/vectors/svg/ic_category_5.svg": "0157218376d6e6062c545264cf9170e0",
"assets/assets/vectors/svg/ic_base_page_brain.svg": "748a46e9541044f911ea76e04e17390e",
"assets/assets/vectors/svg/ic_settings_6.svg": "d3dd9fb7e37dae5d3d6d4abb8c2f9898",
"assets/assets/vectors/svg/arrow_back.svg": "226515bc76ea829d44c3b5343fc22dc4",
"assets/assets/vectors/svg/ic_about_us_5.svg": "5ba92868b7e3fa463a3c6a2d4ae0e603",
"assets/assets/vectors/svg/health_record.svg": "ae9611e242be1a62f2f0ef5eca739427",
"assets/assets/vectors/svg/ic_settings_4.svg": "db7d394bef11060bba981667dafa100c",
"assets/assets/vectors/svg/microphone.svg": "96dd3b9e90ca474688b5d900c408cd6f",
"assets/assets/vectors/svg/ic_category_7.svg": "94ba5f6bfb04686a2c8c03d22f39a7a6",
"assets/assets/vectors/svg/seen.svg": "e1bb8695ad514c37f531542d6fbc689f",
"assets/assets/vectors/svg/ic_tick.svg": "3d9e8b113489bdebf215ddf17a776cab",
"assets/assets/vectors/svg/ic_drawer_4.svg": "94ba5f6bfb04686a2c8c03d22f39a7a6",
"assets/assets/vectors/svg/ic_drawer_5.svg": "18a7dfde77127a7ef1e89c735755f4d9",
"assets/assets/vectors/svg/smaile.svg": "df624cddae0531c34735100a558cfe8e",
"assets/assets/vectors/svg/open_camera.svg": "7e0c36724ff34be09f0c2ba3e4514da4",
"assets/assets/vectors/svg/ic_category_6.svg": "f2180325cf0bad79b421f945074e42d0",
"assets/assets/vectors/svg/marital.svg": "f8cd94ce826a57db76523458195ba2f2",
"assets/assets/vectors/svg/city.svg": "738c96aaae46717fe12d604b946b7702",
"assets/assets/vectors/svg/more_new.svg": "dcadee766c974436b0a3e28037ab3e5e",
"assets/assets/vectors/svg/ic_settings_5.svg": "6649a0f91d20a873af11f086395cd6bb",
"assets/assets/vectors/svg/close1.svg": "4e99650793deaa93a3e6fb5de3b28094",
"assets/assets/vectors/svg/ic_about_us_4.svg": "19d661b8a11c45bd1f3911498c1cadcb",
"assets/assets/vectors/svg/Add-frined.svg": "0fcd9e0895d549d08d4774d2b6021a94",
"assets/assets/vectors/svg/Union%25202.svg": "c8b8fd7c03c0d2b40e0fd11dc966e61d",
"assets/assets/vectors/svg/meditation.svg": "aa5062b33e5dccf2e45e193d9d9196c8",
"assets/assets/vectors/svg/ic_home.svg": "14e7507d4d98816da6444157d7081e79",
"assets/assets/vectors/svg/following.svg": "9b46d9b7d3e81be9784c89e6c61782ed",
"assets/assets/vectors/svg/ic_close.svg": "c02557d7448e594e6a9847a1f1a58b9d",
"assets/assets/vectors/svg/leader_board_brain.svg": "8b002563a890958d15a9c118f86d39c0",
"assets/assets/vectors/svg/calender.svg": "e90d005a122494c3f2b02109eab0830a",
"assets/assets/vectors/svg/pen.svg": "7fea0971778f921468760981a324ce5f",
"assets/assets/vectors/svg/off.svg": "a222837a22fc4d6b7ab3427af2e8199f",
"assets/assets/vectors/svg/ic_player_next.svg": "b0b41a2cfb93460bd2830cc38ea7b491",
"assets/assets/vectors/svg/point_border.svg": "db86a0b12d32a8c81b9f8b610394dac3",
"assets/assets/vectors/svg/type.svg": "501e1950805428d5702b6ae606e7ef01",
"assets/assets/vectors/svg/invite_friend.svg": "d90c7f70b3c4a740177866bcb15a1aba",
"assets/assets/vectors/svg/game.svg": "38c7a287a420346932f29ada4d0a26d2",
"assets/assets/vectors/svg/typeOfMs.svg": "ed553603b46c3c4ce606d1c19fa9a7c2",
"assets/assets/vectors/svg/me_and_ms_icon.svg": "779e191d917109662b9fb3974b9a7ab1",
"assets/assets/vectors/svg/download.svg": "f4391e4384168fbe42ff6a39dd6baa86",
"assets/assets/vectors/svg/Group%2520476.svg": "db9ef5d86151608cb7e5d45c382f2d0e",
"assets/assets/vectors/svg/time.svg": "b1e7252aa97179bbf7b864725d904670",
"assets/assets/vectors/svg/note.svg": "ba7171e624730e0d9d0a5cb7e253c8de",
"assets/assets/vectors/svg/gallery.svg": "f2a1b2ef72c7b21876049249e703427b",
"assets/assets/vectors/svg/add_camera.svg": "393271c2a759d3cb4aa86e0f9de19329",
"assets/assets/vectors/svg/health_record_new.svg": "e7046d928332a57a8011b7a21996d1cf",
"assets/assets/vectors/svg/myelin_logo.svg": "c11412bb035759acf1e7cc5b8a95a51a",
"assets/assets/vectors/svg/Iconly-Light-Notification.svg": "fdee971db9b4804c868ce2960d4960c8",
"assets/assets/vectors/svg/ic_setting_storage.svg": "3df1375d8fc3e5a93af679a835ae565a",
"assets/assets/vectors/svg/ic_yoga_download.svg": "f4391e4384168fbe42ff6a39dd6baa86",
"assets/assets/vectors/svg/filters.svg": "74428d84a1fef1b3ef99d873b61d4c75",
"assets/assets/vectors/svg/Iconly-Light-Tick-Square.svg": "e7eac045990ac2269271c1d1fc9dc495",
"assets/assets/vectors/svg/text_size_setting_icon.svg": "57671eff0eb672c949ed2c2fcf75851b",
"assets/assets/vectors/svg/Dose.svg": "21f3d94ad9e8721862feb82e9650e4e3",
"assets/assets/vectors/svg/sendMessage_new.svg": "85baa6555f2b2999fe5e94bad3b2b6e2",
"assets/assets/vectors/svg/ic_video_player_chevron_left.svg": "5af800c356bff2df86774226cf1bdb81",
"assets/assets/vectors/svg/VolumeLine.svg": "c4b1f238fabf488ffc2921e11d8c401a",
"assets/assets/vectors/svg/ic_video_player_chevron_right.svg": "6dfe970377c15c447f9ab5ecea07b881",
"assets/assets/vectors/svg/plus.svg": "8404d53cc51fa82342e6b52f5cf8c678",
"assets/assets/vectors/svg/check.svg": "a8aa1f5005f0e2b73564a16c1fd8a682",
"assets/assets/vectors/svg/yoga_icon.svg": "c32a3bee842a40cc1b341c150945b88f",
"assets/assets/vectors/svg/Warning.svg": "4c52535fe7dabc3debbcb989d80c803f",
"assets/assets/vectors/svg/identity_card.svg": "d35ea8e7c9ba128ef37f268ca75a8390",
"assets/assets/vectors/svg/pen_new.svg": "b16364b42f4f5fe462176c21883a41ff",
"assets/assets/vectors/svg/marital_new.svg": "6f7819888c4980bbd7aad9f912de9582",
"assets/assets/vectors/svg/info.svg": "33190e31a3e3fa586afa39dc66ed7369",
"assets/assets/vectors/svg/add.svg": "b30036ea43cf5b850ee28e59318ddee4",
"assets/assets/vectors/svg/open_gallery.svg": "390b7245d2b48cdd20fd73ae2e763fdc",
"assets/assets/vectors/svg/ic_slider_4.svg": "618c6cdb077cd817c3b73f30811a1b2e",
"assets/assets/vectors/svg/edit_pen.svg": "013157810f88d8cc93858c29ae36bd88",
"assets/assets/vectors/svg/close.svg": "c0507be2ef508119347e545c7e531488",
"assets/assets/vectors/svg/ic_social_media_5.svg": "d3e8a4c62f8f5ce47cc2860e6b64be07",
"assets/assets/vectors/svg/gender.svg": "8d45a1c3e32781cd6776e0d300759a4f",
"assets/assets/vectors/svg/age.svg": "bd7b91ff7d6e9d8d72af261b1a4ff8e6",
"assets/assets/vectors/svg/ic_player_previous.svg": "136c379cf7ded9f5673f8186b8b17071",
"assets/assets/vectors/svg/copy.svg": "b9f6af1ca1ca5aa8bec88bf26747181e",
"assets/assets/vectors/svg/doubleArrowForward.svg": "ca07d60a8747a0dc34589e2c0eba243b",
"assets/assets/vectors/svg/check_new.svg": "2bbc839923618d0d246e6801ee3abbaf",
"assets/assets/vectors/svg/syrup.svg": "c0b9db7291e49286b86bf961d2611016",
"assets/assets/vectors/svg/refresh.svg": "9c9695f5103fc88d52a6a59b02c291ea",
"assets/assets/vectors/svg/Right%2520Arrow%25201.svg": "7fb97a2c5e6405b1dae030f3b8253a0f",
"assets/assets/vectors/svg/prew.svg": "a311677987e95c66f6a995950bf4f77a",
"assets/assets/vectors/svg/injection.svg": "5d073e91b9e91a9695ba6f16d1ff2a5e",
"assets/assets/vectors/svg/smile.svg": "7c6862b0c75a164853f53d3f58e8f5a1",
"assets/assets/vectors/svg/bookmarks.svg": "5f9447cea10c0a4f23408e2e26fb7207",
"assets/assets/vectors/svg/ic_social_media_4.svg": "40393f44485217af96af6188a072514e",
"assets/assets/vectors/svg/marital2.svg": "e8f66800207153e724b5cd91dfe07d9d",
"assets/assets/vectors/svg/arrow_right_new.svg": "560e1187ee8fa37e62bd3e288e38f010",
"assets/assets/vectors/svg/person_check.svg": "12c0583a9a8475f7bacb65b36930b1bc",
"assets/assets/vectors/svg/ic_slider_5.svg": "f61fd3ef5e8b8a3ec6c978753d8972b4",
"assets/assets/vectors/svg/ic_index.svg": "a396e99e9b6339b72e2a4e8feb4c8003",
"assets/assets/vectors/svg/create_group.svg": "d4e7806911b58ca29d3b1faa1c3a3357",
"assets/assets/vectors/svg/back.svg": "25f2334bb0d3e9ddeccaf6f97cb3beb5",
"assets/assets/vectors/svg/message.svg": "b03f86635f393eb046f4f875831b9bb3",
"assets/assets/vectors/svg/sleeping.svg": "c0024008cbd1f17f45c7aa5985bbc76b",
"assets/assets/vectors/svg/percent.svg": "99ce56b8300778879d44e88e96fc0522",
"assets/assets/vectors/svg/report.svg": "7abf2a6cf1f856d2189e63b04229963e",
"assets/assets/vectors/svg/ic_base_page_bell.svg": "91656c470d22ed82a5dd0d1fdc8c59c8",
"assets/assets/vectors/svg/arrow_down.svg": "f813366b8d411608d143005fc1d2f103",
"assets/assets/vectors/svg/Path%2520251.svg": "77e815eab4fcd264ae30173030d84b4b",
"assets/assets/vectors/svg/cameraIcon.svg": "051c2622b847fbca7dd97924eff81e16",
"assets/assets/vectors/svg/chat.svg": "26795fbf5df1dc416cbbd919ab97d5f2",
"assets/assets/vectors/svg/picture.svg": "3e4e9bf6596928d5931cb50bd0760e25",
"assets/assets/vectors/svg/create_group_icon.svg": "d4e7806911b58ca29d3b1faa1c3a3357",
"assets/assets/vectors/svg/friends_new.svg": "a09c89e7848d891847684a48cc9c8046",
"assets/assets/vectors/svg/send.svg": "0553b9e3d3594212d70306da0707c053",
"assets/assets/vectors/svg/bookmark1.svg": "babed9dd464e18999e3ff2b9b0430c65",
"assets/assets/vectors/svg/marital1.svg": "e8f66800207153e724b5cd91dfe07d9d",
"assets/assets/vectors/svg/camera.svg": "a161eee3c80c317e7b7c345be14aff7b",
"assets/assets/vectors/svg/ic_slider_6.svg": "bc2b691a34b702fc28dd7717c7eb9de9",
"assets/assets/vectors/svg/ic_slider_2.svg": "f15e36f005d055eabc8fc8ab11eca55d",
"assets/assets/vectors/svg/arrow_back_new.svg": "fce097b86fb6920767618c492adf2e26",
"assets/assets/vectors/svg/ic_social_media_3.svg": "c6ec06c493317092a0e0abed9d3e48e0",
"assets/assets/vectors/svg/mute.svg": "4298ad2266b4c3540384134373712666",
"assets/assets/vectors/svg/profile_setting_icon.svg": "6d14c3a2d9d7b51721c6bcc3c4c6ee78",
"assets/assets/vectors/svg/more.svg": "34eca688925c666d784d29c9275534ca",
"assets/assets/vectors/svg/ic_home_warning.svg": "d97ddfc876e1a67c7298df7500e7ed31",
"assets/assets/vectors/svg/trash.svg": "a320e210bd730e044d29f5589254b8b9",
"assets/assets/vectors/svg/star_outline.svg": "fbfc4b32844c3ee91ca52c590ecc27a4",
"assets/assets/vectors/svg/contacts.svg": "8f258fbcd03f119adcf0702f2f8780f7",
"assets/assets/vectors/svg/star.svg": "51566343ce0ae725f9b78d203e2089db",
"assets/assets/vectors/svg/ic_yoga_like.svg": "8b59eb76ac6b4d6bf69475a37efb685a",
"assets/assets/vectors/svg/ic_social_media_2.svg": "1376ed2fd27852e848bca9e831ba38e0",
"assets/assets/vectors/svg/ic_slider_3.svg": "a680895a46acd2a9bfb48cadf29fe6b2",
"assets/assets/vectors/svg/ic_slider_1.svg": "4fd5fc5e8d4f3236d8c0d26a53f23a0a",
"assets/assets/vectors/svg/create_private_conversation.svg": "f627758594a431c0e60a4b2bac2941c6",
"assets/assets/vectors/svg/next.svg": "74aaf552de3db1bb18149b9c48293ea2",
"assets/assets/vectors/svg/siting.svg": "f670061c009890278f403b4679df90b5",
"assets/assets/vectors/svg/typeOfMs2.svg": "ed553603b46c3c4ce606d1c19fa9a7c2",
"assets/assets/vectors/svg/ic_check_mark.svg": "9841a3761f683e5b724cf093984b2a87",
"assets/assets/vectors/svg/ic_social_media_1.svg": "02ebb7e58279a34333b9fd63cdd4b214",
"assets/assets/vectors/svg/select.svg": "c8fbc62d796ffeef0998610f2f985c02",
"assets/assets/vectors/svg/height.svg": "26f74427f99e50ea17fb028e60eb8372",
"assets/assets/vectors/svg/ic_notification_date.svg": "ded10e757621978b4816467f9e84e902",
"assets/assets/vectors/svg/filter-new.svg": "74428d84a1fef1b3ef99d873b61d4c75",
"assets/assets/vectors/svg/ic_video_player_full_screen.svg": "ec7c080232ac4cb0bd3728bc3920333b",
"assets/assets/vectors/svg/waiting.svg": "2afae326acc99704c16d2c6c9828516e",
"assets/assets/vectors/svg/phone.svg": "a24a3d02b19776ace97066afa6949e38",
"assets/assets/vectors/svg/Question-mark.svg": "15dc1accdbd4a8dc1a40e323fd7d0eb9",
"assets/assets/vectors/svg/eye.svg": "611b67a1efaa36a47294b3ea6e5a4b75",
"assets/assets/vectors/svg/hours-square.svg": "78ffea3805c0b766ac5f07c7c9435b38",
"assets/assets/vectors/svg/location.svg": "d3f75daef92d1b2bc62889ea30a5263d",
"assets/assets/vectors/svg/pill.svg": "330d7fbbfcf41cad5f3804a95ab7666c",
"assets/assets/vectors/svg/gift.svg": "57f7e097e9f80182f44ce7feaebed154",
"assets/assets/vectors/svg/add-friend.svg": "81eb3fbb5c03d34309e80fd7b81e4a4d",
"assets/assets/vectors/svg/profile.svg": "59c12be229296167a15ba54d25f7a293",
"assets/assets/vectors/svg/share.svg": "beb440e960964ae2136419f5e5e9bc75",
"assets/assets/vectors/svg/block_new.svg": "d13c68eb403c05f51558e69b23a545ca",
"assets/assets/vectors/svg/attach.svg": "82815f719a41285fb4ffb4c1d5055db1",
"assets/assets/vectors/svg/filter.svg": "35c85b97acf7d4fff5701a8c7f338a92",
"assets/assets/vectors/svg/medal.svg": "e9e9b75c886d6c7d4378e35a2d46d56f",
"assets/assets/vectors/svg/comment.svg": "b5b2e4f326990ad7b51b2e116fafdc71",
"assets/assets/vectors/svg/ic_chevron_down_simple.svg": "f825c66e13fc7aaaf59648ca45dc0aa0",
"assets/assets/vectors/svg/location_new.svg": "fa4db1fb42b3c6feb8da6e39ccae85aa",
"assets/assets/vectors/svg/Light-Notification.svg": "fdee971db9b4804c868ce2960d4960c8",
"assets/assets/vectors/svg/Group%2520965.svg": "eeedd4dc356caf42507266f34162b229",
"assets/assets/vectors/svg/ic_yoga_bookmark.svg": "87b0b74f73f825076e692e506adb3cfe",
"assets/assets/vectors/svg/seen_count.svg": "feb2747731ee09a88de7cfd0ea42c0b8",
"assets/assets/vectors/svg/cancel_friendShip_new.svg": "8a20bcd7a111bfcb698f7c74db6e7f70",
"assets/assets/vectors/svg/filterIcon.svg": "74428d84a1fef1b3ef99d873b61d4c75",
"assets/assets/vectors/svg/info-new.svg": "1d01fac61e3fba83558e023947b89a32",
"assets/assets/vectors/svg/bookmark.svg": "87b0b74f73f825076e692e506adb3cfe",
"assets/assets/vectors/svg/edit-pen.svg": "8006962211825575e84b7611ba6b8c2f",
"assets/assets/vectors/svg/Close%2520Square.svg": "c1c0db1a3643241fd188ebde0dceeba1",
"assets/assets/vectors/svg/done.svg": "d339da7a845c623641cef434b67f71d6",
"assets/assets/vectors/svg/doubleArrowBack.svg": "f5ba46bfb3ed8ed5b4cc5e960bb1ccdf",
"assets/assets/vectors/svg/drop.svg": "ec7d73ca4155405061b626987ac8e15c",
"assets/assets/vectors/svg/ic_setting_font.svg": "0818bda7068cf2a6fcc5356e546571d4",
"assets/assets/vectors/svg/block.svg": "5eeffa2dbe963f6664447db7b819d3f6",
"assets/assets/vectors/svg/ic_chevron_up_simple.svg": "a6eece7b35d294a697a301fa1e6a7d84",
"assets/assets/vectors/svg/downloadIcon.svg": "1e419bc7dd2e91f8fbd14b45114bfce7",
"assets/assets/vectors/svg/settings_new.svg": "c7d8f361406f85051f0f53eeb161927e",
"assets/assets/vectors/svg/minus.svg": "dba1842dbb0a70d54eb59b050328d660",
"assets/assets/vectors/svg/moon.svg": "e6552d140710d2bca6877c3af12748f4",
"assets/assets/vectors/svg/weight.svg": "80ad572d3a269acdd560e5841a1d47cf",
"assets/assets/vectors/svg/ic_reminder_item_clock.svg": "cd29eca5584394dc6b0a4bdcadea76ef",
"assets/assets/vectors/svg/heart.svg": "c259cef0e556fff9be497e6d735389a8",
"assets/assets/fonts/YekanBakhHeavy.ttf": "04251e45442fbe61bced94421f509fd2",
"assets/assets/fonts/YekanBakhFat.ttf": "28ac715d6bc1136c8390f137dc0d1de0",
"assets/assets/fonts/YekanBakhLight.ttf": "3d88f89b7b8d1d21d05d3c5a0625ab94",
"assets/assets/fonts/YekanBakhMedium.ttf": "1667b1f04f1c774c99cab5712a99b574",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
