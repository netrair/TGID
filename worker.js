/* Obfuscated. Source project: https://github.com/netrair/TGID */
function _dec(s){return new TextDecoder().decode(Uint8Array.from(atob(s),c=>c.charCodeAt(0)));}
/**
 * ========================================================================
 *  Telegram ID-Finder Bot — Cloudflare Worker 
 * ========================================================================
 *
 *  ENV VARS (Settings -> Variables and Secrets):
 *     BOT_TOKEN   -> توکن ربات از @BotFather
 *     ADMIN_IDS   -> آیدی عددی ادمین‌ها با کاما جدا شده، مثل: 111111,222222
 *
 *  KV NAMESPACE BINDING (Settings -> Bindings -> KV Namespace):
 *     Variable name : BOT_KV
 *
 *  DEPLOY:
 *     1) این فایل را کامل در ویرایشگر Worker پیست و Deploy کنید.
 *     2) فقط یک بار آدرس worker را در مرورگر باز کنید (درخواست GET) —
 *        webhook به صورت خودکار ست می‌شود.
 * ========================================================================
 */

// ---------------------------------------------------------------------
// Languages
// ---------------------------------------------------------------------
const _0x000 = [
  { code: _dec("ZmE="), flag: _dec("8J+HrvCfh7c="), name: _dec("2YHYp9ix2LPbjA==") },
  { code: _dec("ZW4="), flag: _dec("8J+HrPCfh6c="), name: _dec("RW5nbGlzaA==") },
  { code: _dec("cnU="), flag: _dec("8J+Ht/Cfh7o="), name: _dec("0KDRg9GB0YHQutC40Lk=") },
  { code: _dec("YXI="), flag: _dec("8J+HuPCfh6Y="), name: _dec("2KfZhNi52LHYqNmK2Kk=") },
  { code: _dec("ZXM="), flag: _dec("8J+HqvCfh7g="), name: _dec("RXNwYcOxb2w=") },
  { code: _dec("dHI="), flag: _dec("8J+HufCfh7c="), name: _dec("VMO8cmvDp2U=") },
  { code: _dec("ZnI="), flag: _dec("8J+Hq/Cfh7c="), name: _dec("RnJhbsOnYWlz") },
  { code: _dec("ZGU="), flag: _dec("8J+HqfCfh6o="), name: _dec("RGV1dHNjaA==") },
  { code: _dec("cHQ="), flag: _dec("8J+HtfCfh7k="), name: _dec("UG9ydHVndcOqcw==") },
  { code: _dec("aXQ="), flag: _dec("8J+HrvCfh7k="), name: _dec("SXRhbGlhbm8=") },
  { code: _dec("aGk="), flag: _dec("8J+HrvCfh7M="), name: _dec("4KS54KS/4KSo4KWN4KSm4KWA") },
  { code: _dec("dXI="), flag: _dec("8J+HtfCfh7A="), name: _dec("2KfYsdiv2Yg=") },
  { code: _dec("YXo="), flag: _dec("8J+HpvCfh78="), name: _dec("QXrJmXJiYXljYW4=") },
  { code: _dec("dXo="), flag: _dec("8J+HuvCfh78="), name: _dec("Tyd6YmVr") },
  { code: _dec("aWQ="), flag: _dec("8J+HrvCfh6k="), name: _dec("SW5kb25lc2lh") },
];

const _0x001 = {
  fa: { welcome: _dec("8J+RiyDYrtmI2LQg2KLZhdiv24zYryE="), lang_saved: _dec("4pyFINiy2KjYp9mGINi02YXYpyDYq9io2Kog2LTYry4="), menu_text: _dec("8J+PoCDZhdmG2YjbjCDYp9i12YTbjCDigJQg24zaqduMINin2LIg2q/YstuM2YbZh+KAjNmH2Kcg2LHYpyDYp9mG2KrYrtin2Kgg2qnZhtuM2K86"), btn_myid: _dec("8J+GlCDYotuM2K/bjCDYudiv2K/bjCDZhdmG"), btn_help: _dec("4p2TINix2KfZh9mG2YXYpw=="), btn_admin: _dec("8J+boCDZvtmG2YQg2YXYr9uM2LHbjNiq"), help_text: _dec("8J+TjCDYsdin2YfZhtmF2KfbjCDZvtuM2K/YpyDaqdix2K/ZhiDYotuM2K/bjCDYudiv2K/bjDoKCjHvuI/ig6Mg2KjYsdin24wg2KLbjNiv24wg2K7ZiNiv2KrYp9mGOiDYr9qp2YXZhyDCq9ii24zYr9uMINi52K/Yr9uMINmF2YbCuyDYsdinINio2LLZhtuM2K8uCjLvuI/ig6Mg2KjYsdin24wg2KLbjNiv24wg24zaqSDaqdin2LHYqNixINiv24zar9ixOiDbjNqpINm+24zYp9mFINin2LIg2KfZiCDYsdinINio2LHYp9uMINix2KjYp9iqINmB2YjYsdmI2KfYsdivINqp2YbbjNivLgoz77iP4oOjINio2LHYp9uMINii24zYr9uMINqp2KfZhtin2YQv2q/YsdmI2Ycg2LnZhdmI2YXbjDog24zZiNiy2LHZhtuM2YUg2KLZhiDYsdinINio2KcgQCDYp9ix2LPYp9mEINqp2YbbjNivINuM2Kcg24zaqSDZvtiz2Kog2KfYsiDYotmGINix2Kcg2YHZiNix2YjYp9ix2K8g2qnZhtuM2K8uCjTvuI/ig6Mg2KjYsdin24wg2KLbjNiv24wg2qnYp9mG2KfZhC/ar9ix2YjZhyDYrti12YjYtduMOiDYsdio2KfYqiDYsdinINiv2LEg2KLZhiDYp9iv2YXbjNmGINqp2YbbjNiv2Jsg2KLbjNiv24wg2KjZhyDYtdmI2LHYqiDYrtmI2K/aqdin2LEg2KjYsdin24wg2KfYr9mF24zZhiDYp9ix2LPYp9mEINmF24zigIzYtNmI2K8u"), header_found: _dec("8J+GlCDYp9i32YTYp9i52KfYqiDbjNin2YHYquKAjNi02K/Zhw=="), lbl_name: _dec("8J+RpCDZhtin2YU="), lbl_username: _dec("8J+UlyDbjNmI2LLYsdmG24zZhQ=="), lbl_id: _dec("8J+GlCDYotuM2K/bjCDYudiv2K/bjA=="), lbl_type: _dec("8J+TgiDZhtmI2Lk="), lbl_none: _dec("2YbYr9in2LHYrw=="), type_user: _dec("2qnYp9ix2KjYsQ=="), type_group: _dec("2q/YsdmI2Yc="), type_channel: _dec("2qnYp9mG2KfZhA=="), type_supergroup: _dec("2LPZiNm+2LHar9ix2YjZhw=="), not_found: _dec("4pqg77iPINin2LfZhNin2LnYp9iq24wg2b7bjNiv2Kcg2YbYtNivLiDZhdmF2qnZhiDYp9iz2Kog2KfbjNmGINqp2KfYsdio2LEg2K3YsduM2YUg2K7YtdmI2LXbjCDZgdmI2LHZiNin2LHYryDYsdinINmB2LnYp9mEINqp2LHYr9mHINio2KfYtNivLg=="), lock_msg: _dec("8J+UkiDYqNix2KfbjCDYp9iz2KrZgdin2K/ZhyDYp9iyINix2KjYp9iqINin2KjYqtiv2Kcg2KjYp9uM2K8g2K/YsSDaqdin2YbYp9mEL9qv2LHZiNmH4oCM2YfYp9uMINiy24zYsSDYudi22Ygg2LTZiNuM2K86"), btn_check_join: _dec("4pyFINio2LHYsdiz24wg2YXYrNiv2K8g2LnYttmI24zYqg=="), joined_ok: _dec("4pyFINi52LbZiNuM2Kog2LTZhdinINiq2KfbjNuM2K8g2LTYryE="), still_locked: _dec("4p2MINmH2YbZiNiyINiv2LEg2YfZhdmHINmF2YjYp9ix2K8g2LnYttmIINmG2LTYr9mH4oCM2KfbjNivLg==") },
  en: { welcome: _dec("8J+RiyBXZWxjb21lIQ=="), lang_saved: _dec("4pyFIExhbmd1YWdlIHNhdmVkLg=="), menu_text: _dec("8J+PoCBNYWluIG1lbnUg4oCUIGNob29zZSBhbiBvcHRpb246"), btn_myid: _dec("8J+GlCBNeSBudW1lcmljIElE"), btn_help: _dec("4p2TIEhlbHA="), btn_admin: _dec("8J+boCBBZG1pbiBwYW5lbA=="), help_text: _dec("8J+TjCBIb3cgdG8gZmluZCBhIG51bWVyaWMgSUQ6Cgox77iP4oOjIFlvdXIgb3duIElEOiB0YXAgIk15IG51bWVyaWMgSUQiLgoy77iP4oOjIEFub3RoZXIgdXNlcjogZm9yd2FyZCBvbmUgb2YgdGhlaXIgbWVzc2FnZXMgdG8gdGhlIGJvdC4KM++4j+KDoyBQdWJsaWMgY2hhbm5lbC9ncm91cDogc2VuZCBpdHMgQHVzZXJuYW1lIG9yIGZvcndhcmQgYSBwb3N0Lgo077iP4oOjIFByaXZhdGUgY2hhbm5lbC9ncm91cDogYWRkIHRoZSBib3QgYXMgYWRtaW4gdGhlcmU7IHRoZSBJRCBpcyBzZW50IHRvIHRoZSBhZG1pbiBhdXRvbWF0aWNhbGx5Lg=="), header_found: _dec("8J+GlCBJbmZvcm1hdGlvbiBmb3VuZA=="), lbl_name: _dec("8J+RpCBOYW1l"), lbl_username: _dec("8J+UlyBVc2VybmFtZQ=="), lbl_id: _dec("8J+GlCBOdW1lcmljIElE"), lbl_type: _dec("8J+TgiBUeXBl"), lbl_none: _dec("Tm9uZQ=="), type_user: _dec("VXNlcg=="), type_group: _dec("R3JvdXA="), type_channel: _dec("Q2hhbm5lbA=="), type_supergroup: _dec("U3VwZXJncm91cA=="), not_found: _dec("4pqg77iPIE5vdGhpbmcgZm91bmQuIFRoZSB1c2VyIG1heSBoYXZlIHByaXZhY3kgc2V0dGluZ3MgZW5hYmxlZC4="), lock_msg: _dec("8J+UkiBZb3UgbXVzdCBqb2luIHRoZSBmb2xsb3dpbmcgYmVmb3JlIHVzaW5nIHRoZSBib3Q6"), btn_check_join: _dec("4pyFIENoZWNrIGFnYWlu"), joined_ok: _dec("4pyFIE1lbWJlcnNoaXAgY29uZmlybWVkIQ=="), still_locked: _dec("4p2MIFlvdSBoYXZlbid0IGpvaW5lZCBldmVyeXRoaW5nIHlldC4=") },
  ru: { welcome: _dec("8J+RiyDQlNC+0LHRgNC+INC/0L7QttCw0LvQvtCy0LDRgtGMIQ=="), lang_saved: _dec("4pyFINCv0LfRi9C6INGB0L7RhdGA0LDQvdGR0L0u"), menu_text: _dec("8J+PoCDQk9C70LDQstC90L7QtSDQvNC10L3RjiDigJQg0LLRi9Cx0LXRgNC40YLQtSDQstCw0YDQuNCw0L3Rgjo="), btn_myid: _dec("8J+GlCDQnNC+0LkgSUQ="), btn_help: _dec("4p2TINCf0L7QvNC+0YnRjA=="), btn_admin: _dec("8J+boCDQn9Cw0L3QtdC70Ywg0LDQtNC80LjQvdCw"), help_text: _dec("8J+TjCDQmtCw0Log0L3QsNC50YLQuCDRh9C40YHQu9C+0LLQvtC5IElEOgoKMe+4j+KDoyDQodCy0L7QuSBJRDog0L3QsNC20LzQuNGC0LUgwqvQnNC+0LkgSUTCuy4KMu+4j+KDoyDQlNGA0YPQs9C+0Lkg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMOiDQv9C10YDQtdGI0LvQuNGC0LUg0LXQs9C+INGB0L7QvtCx0YnQtdC90LjQtSDQsdC+0YLRgy4KM++4j+KDoyDQn9GD0LHQu9C40YfQvdGL0Lkg0LrQsNC90LDQuy/Qs9GA0YPQv9C/0LA6INC+0YLQv9GA0LDQstGM0YLQtSBAdXNlcm5hbWUg0LjQu9C4INC/0LXRgNC10YjQu9C40YLQtSDQv9C+0YHRgi4KNO+4j+KDoyDQn9GA0LjQstCw0YLQvdGL0Lkg0LrQsNC90LDQuy/Qs9GA0YPQv9C/0LA6INC00L7QsdCw0LLRjNGC0LUg0LHQvtGC0LAg0LDQtNC80LjQvdC+0Lwg4oCUIElEINC/0YDQuNC00ZHRgiDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuC4="), header_found: _dec("8J+GlCDQndCw0LnQtNC10L3QvdCw0Y8g0LjQvdGE0L7RgNC80LDRhtC40Y8="), lbl_name: _dec("8J+RpCDQmNC80Y8="), lbl_username: _dec("8J+UlyDQrtC30LXRgNC90LXQudC8"), lbl_id: _dec("8J+GlCBJRA=="), lbl_type: _dec("8J+TgiDQotC40L8="), lbl_none: _dec("0J3QtdGC"), type_user: _dec("0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GM"), type_group: _dec("0JPRgNGD0L/Qv9Cw"), type_channel: _dec("0JrQsNC90LDQuw=="), type_supergroup: _dec("0KHRg9C/0LXRgNCz0YDRg9C/0L/QsA=="), not_found: _dec("4pqg77iPINCd0LjRh9C10LPQviDQvdC1INC90LDQudC00LXQvdC+LiDQktC+0LfQvNC+0LbQvdC+LCDQstC60LvRjtGH0LXQvdCwINC/0YDQuNCy0LDRgtC90L7RgdGC0Ywg0L/QtdGA0LXRgdGL0LvQutC4Lg=="), lock_msg: _dec("8J+UkiDQodC90LDRh9Cw0LvQsCDQv9C+0LTQv9C40YjQuNGC0LXRgdGMINC90LAg0YHQu9C10LTRg9GO0YnQtdC1Og=="), btn_check_join: _dec("4pyFINCf0YDQvtCy0LXRgNC40YLRjCDRgdC90L7QstCw"), joined_ok: _dec("4pyFINCf0L7QtNC/0LjRgdC60LAg0L/QvtC00YLQstC10YDQttC00LXQvdCwIQ=="), still_locked: _dec("4p2MINCS0Ysg0LXRidGRINC90LUg0L/QvtC00L/QuNGB0LDQu9C40YHRjCDQvdCwINCy0YHRkS4=") },
  ar: { welcome: _dec("8J+RiyDZhdix2K3YqNin2Ysg2KjZgyE="), lang_saved: _dec("4pyFINiq2YUg2K3Zgdi4INin2YTZhNi62Kku"), menu_text: _dec("8J+PoCDYp9mE2YLYp9im2YXYqSDYp9mE2LHYptmK2LPZitipIOKAlCDYp9iu2KrYsSDYrtmK2KfYsdin2Ys6"), btn_myid: _dec("8J+GlCDZhdi52LHZkdmB2Yog2KfZhNix2YLZhdmK"), btn_help: _dec("4p2TINmF2LPYp9i52K/YqQ=="), btn_admin: _dec("8J+boCDZhNmI2K3YqSDYp9mE2KXYr9in2LHYqQ=="), help_text: _dec("8J+TjCDZg9mK2YHZitipINil2YrYrNin2K8g2KfZhNmF2LnYsdmR2YEg2KfZhNix2YLZhdmKOgoKMe+4j+KDoyDZhdi52LHZkdmB2YM6INin2LbYuti3IMKr2YXYudix2ZHZgdmKINin2YTYsdmC2YXZisK7Lgoy77iP4oOjINmF2LPYqtiu2K/ZhSDYotiu2LE6INij2LnYryDYqtmI2KzZitmHINix2LPYp9mE2Kkg2YXZhtmHINil2YTZiSDYp9mE2KjZiNiqLgoz77iP4oOjINmC2YbYp9ipL9mF2KzZhdmI2LnYqSDYudin2YXYqTog2KPYsdiz2YQgQHVzZXJuYW1lINij2Ygg2KPYudivINiq2YjYrNmK2Ycg2YXZhti02YjYsS4KNO+4j+KDoyDZgtmG2KfYqS/Zhdis2YXZiNi52Kkg2K7Yp9i12Kk6INij2LbZgSDYp9mE2KjZiNiqINmD2YXYtNix2YEg2YjYs9mK2Y/Ysdiz2YQg2KfZhNmF2LnYsdmR2YEg2KrZhNmC2KfYptmK2KfZiy4="), header_found: _dec("8J+GlCDYp9mE2YXYudmE2YjZhdin2Kog2KfZhNiq2Yog2KrZhSDYp9mE2LnYq9mI2LEg2LnZhNmK2YfYpw=="), lbl_name: _dec("8J+RpCDYp9mE2KfYs9mF"), lbl_username: _dec("8J+UlyDYp9mE2YXYudix2ZHZgQ=="), lbl_id: _dec("8J+GlCDYp9mE2YXYudix2ZHZgSDYp9mE2LHZgtmF2Yo="), lbl_type: _dec("8J+TgiDYp9mE2YbZiNi5"), lbl_none: _dec("2YTYpyDZitmI2KzYrw=="), type_user: _dec("2YXYs9iq2K7Yr9mF"), type_group: _dec("2YXYrNmF2YjYudip"), type_channel: _dec("2YLZhtin2Kk="), type_supergroup: _dec("2YXYrNmF2YjYudipINmD2KjZitix2Kk="), not_found: _dec("4pqg77iPINmE2YUg2YrYqtmFINin2YTYudir2YjYsSDYudmE2Ykg2LTZitihLiDYsdio2YXYpyDYqtmD2YjZhiDYp9mE2K7YtdmI2LXZitipINmF2YHYudmR2YTYqS4="), lock_msg: _dec("8J+UkiDZitis2Kgg2KfZhNin2YbYttmF2KfZhSDYpdmE2Ykg2KfZhNiq2KfZhNmKINij2YjZhNin2Ys6"), btn_check_join: _dec("4pyFINiq2K3ZgtmCINmF2KzYr9iv2KfZiw=="), joined_ok: _dec("4pyFINiq2YUg2KrYo9mD2YrYryDYp9mE2LnYttmI2YrYqSE="), still_locked: _dec("4p2MINmE2YUg2KrZhti22YUg2KjYudivINil2YTZiSDYp9mE2KzZhdmK2Lku") },
  es: { welcome: _dec("8J+RiyDCoUJpZW52ZW5pZG8h"), lang_saved: _dec("4pyFIElkaW9tYSBndWFyZGFkby4="), menu_text: _dec("8J+PoCBNZW7DuiBwcmluY2lwYWwg4oCUIGVsaWdlIHVuYSBvcGNpw7NuOg=="), btn_myid: _dec("8J+GlCBNaSBJRCBudW3DqXJpY28="), btn_help: _dec("4p2TIEF5dWRh"), btn_admin: _dec("8J+boCBQYW5lbCBkZSBhZG1pbg=="), help_text: _dec("8J+TjCBDw7NtbyBlbmNvbnRyYXIgdW4gSUQgbnVtw6lyaWNvOgoKMe+4j+KDoyBUdSBJRDogcHVsc2EgwqtNaSBJRCBudW3DqXJpY2/Cuy4KMu+4j+KDoyBPdHJvIHVzdWFyaW86IHJlZW52w61hIHVuIG1lbnNhamUgc3V5byBhbCBib3QuCjPvuI/ig6MgQ2FuYWwvZ3J1cG8gcMO6YmxpY286IGVudsOtYSBzdSBAdXN1YXJpbyBvIHJlZW52w61hIHVuYSBwdWJsaWNhY2nDs24uCjTvuI/ig6MgQ2FuYWwvZ3J1cG8gcHJpdmFkbzogYcOxYWRlIGFsIGJvdCBjb21vIGFkbWluOyBlbCBJRCBzZSBlbnbDrWEgYXV0b23DoXRpY2FtZW50ZS4="), header_found: _dec("8J+GlCBJbmZvcm1hY2nDs24gZW5jb250cmFkYQ=="), lbl_name: _dec("8J+RpCBOb21icmU="), lbl_username: _dec("8J+UlyBVc3Vhcmlv"), lbl_id: _dec("8J+GlCBJRCBudW3DqXJpY28="), lbl_type: _dec("8J+TgiBUaXBv"), lbl_none: _dec("TmluZ3Vubw=="), type_user: _dec("VXN1YXJpbw=="), type_group: _dec("R3J1cG8="), type_channel: _dec("Q2FuYWw="), type_supergroup: _dec("U3VwZXJncnVwbw=="), not_found: _dec("4pqg77iPIE5vIHNlIGVuY29udHLDsyBuYWRhLiBQdWVkZSB0ZW5lciBsYSBwcml2YWNpZGFkIGFjdGl2YWRhLg=="), lock_msg: _dec("8J+UkiBEZWJlcyB1bmlydGUgYSBsbyBzaWd1aWVudGUgcHJpbWVybzo="), btn_check_join: _dec("4pyFIFZlcmlmaWNhciBkZSBudWV2bw=="), joined_ok: _dec("4pyFIMKhTWVtYnJlc8OtYSBjb25maXJtYWRhIQ=="), still_locked: _dec("4p2MIEHDum4gbm8gdGUgaGFzIHVuaWRvIGEgdG9kby4=") },
  tr: { welcome: _dec("8J+RiyBIb8WfIGdlbGRpbml6IQ=="), lang_saved: _dec("4pyFIERpbCBrYXlkZWRpbGRpLg=="), menu_text: _dec("8J+PoCBBbmEgbWVuw7wg4oCUIGJpciBzZcOnZW5layBzZcOnaW46"), btn_myid: _dec("8J+GlCBTYXnEsXNhbCBJRCdt"), btn_help: _dec("4p2TIFlhcmTEsW0="), btn_admin: _dec("8J+boCBZw7ZuZXRpbSBwYW5lbGk="), help_text: _dec("8J+TjCBTYXnEsXNhbCBJRCBuYXPEsWwgYnVsdW51cjoKCjHvuI/ig6MgS2VuZGkgSUQnbml6OiAiU2F5xLFzYWwgSUQnbSIgZMO8xJ9tZXNpbmUgYmFzxLFuLgoy77iP4oOjIEJhxZ9rYSBiaXIga3VsbGFuxLFjxLE6IG1lc2FqxLFuxLEgYm90YSBpbGV0aW4uCjPvuI/ig6MgR2VuZWwga2FuYWwvZ3J1cDogQGt1bGxhbmljaWFkaSBnw7ZuZGVyaW4gdmV5YSBiaXIgZ8O2bmRlcml5aSBpbGV0aW4uCjTvuI/ig6Mgw5Z6ZWwga2FuYWwvZ3J1cDogYm90dSB5w7ZuZXRpY2kgeWFwxLFuOyBJRCBvdG9tYXRpayBnw7ZuZGVyaWxpci4="), header_found: _dec("8J+GlCBCdWx1bmFuIGJpbGdpbGVy"), lbl_name: _dec("8J+RpCDEsHNpbQ=="), lbl_username: _dec("8J+UlyBLdWxsYW7EsWPEsSBhZMSx"), lbl_id: _dec("8J+GlCBTYXnEsXNhbCBJRA=="), lbl_type: _dec("8J+TgiBUw7xy"), lbl_none: _dec("WW9r"), type_user: _dec("S3VsbGFuxLFjxLE="), type_group: _dec("R3J1cA=="), type_channel: _dec("S2FuYWw="), type_supergroup: _dec("U8O8cGVyIGdydXA="), not_found: _dec("4pqg77iPIEJpciDFn2V5IGJ1bHVuYW1hZMSxLiBHaXpsaWxpayBheWFyxLEgYcOnxLFrIG9sYWJpbGlyLg=="), lock_msg: _dec("8J+UkiDDlm5jZSDFn3VubGFyYSBrYXTEsWxtYWzEsXPEsW7EsXo6"), btn_check_join: _dec("4pyFIFRla3JhciBrb250cm9sIGV0"), joined_ok: _dec("4pyFIMOceWVsaWsgb25heWxhbmTEsSE="), still_locked: _dec("4p2MIEhlbsO8eiBoZXBzaW5lIGthdMSxbG1hZMSxbsSxei4=") },
  fr: { welcome: _dec("8J+RiyBCaWVudmVudWUgIQ=="), lang_saved: _dec("4pyFIExhbmd1ZSBlbnJlZ2lzdHLDqWUu"), menu_text: _dec("8J+PoCBNZW51IHByaW5jaXBhbCDigJQgY2hvaXNpc3NleiB1bmUgb3B0aW9uIDo="), btn_myid: _dec("8J+GlCBNb24gSUQgbnVtw6lyaXF1ZQ=="), btn_help: _dec("4p2TIEFpZGU="), btn_admin: _dec("8J+boCBQYW5uZWF1IGFkbWlu"), help_text: _dec("8J+TjCBDb21tZW50IHRyb3V2ZXIgdW4gSUQgbnVtw6lyaXF1ZSA6Cgox77iP4oOjIFZvdHJlIElEIDogYXBwdXlleiBzdXIgwqsgTW9uIElEIG51bcOpcmlxdWUgwrsuCjLvuI/ig6MgVW4gYXV0cmUgdXRpbGlzYXRldXIgOiB0cmFuc2bDqXJleiB1biBkZSBzZXMgbWVzc2FnZXMgYXUgYm90Lgoz77iP4oOjIENhbmFsL2dyb3VwZSBwdWJsaWMgOiBlbnZveWV6IHNvbiBAdXNlcm5hbWUgb3UgdHJhbnNmw6lyZXogdW4gcG9zdC4KNO+4j+KDoyBDYW5hbC9ncm91cGUgcHJpdsOpIDogYWpvdXRleiBsZSBib3QgY29tbWUgYWRtaW4gOyBsJ0lEIGVzdCBlbnZvecOpIGF1dG9tYXRpcXVlbWVudC4="), header_found: _dec("8J+GlCBJbmZvcm1hdGlvbnMgdHJvdXbDqWVz"), lbl_name: _dec("8J+RpCBOb20="), lbl_username: _dec("8J+UlyBOb20gZCd1dGlsaXNhdGV1cg=="), lbl_id: _dec("8J+GlCBJRCBudW3DqXJpcXVl"), lbl_type: _dec("8J+TgiBUeXBl"), lbl_none: _dec("QXVjdW4="), type_user: _dec("VXRpbGlzYXRldXI="), type_group: _dec("R3JvdXBl"), type_channel: _dec("Q2FuYWw="), type_supergroup: _dec("U3VwZXJncm91cGU="), not_found: _dec("4pqg77iPIFJpZW4gdHJvdXbDqS4gTGEgY29uZmlkZW50aWFsaXTDqSBlc3QgcGV1dC3DqnRyZSBhY3RpdsOpZS4="), lock_msg: _dec("8J+UkiBWb3VzIGRldmV6IGQnYWJvcmQgcmVqb2luZHJlIGNlIHF1aSBzdWl0IDo="), btn_check_join: _dec("4pyFIFbDqXJpZmllciDDoCBub3V2ZWF1"), joined_ok: _dec("4pyFIEFkaMOpc2lvbiBjb25maXJtw6llICE="), still_locked: _dec("4p2MIFZvdXMgbidhdmV6IHBhcyBlbmNvcmUgdG91dCByZWpvaW50Lg==") },
  de: { welcome: _dec("8J+RiyBXaWxsa29tbWVuIQ=="), lang_saved: _dec("4pyFIFNwcmFjaGUgZ2VzcGVpY2hlcnQu"), menu_text: _dec("8J+PoCBIYXVwdG1lbsO8IOKAlCB3w6RobGUgZWluZSBPcHRpb246"), btn_myid: _dec("8J+GlCBNZWluZSBudW1lcmlzY2hlIElE"), btn_help: _dec("4p2TIEhpbGZl"), btn_admin: _dec("8J+boCBBZG1pbi1QYW5lbA=="), help_text: _dec("8J+TjCBTbyBmaW5kZXN0IGR1IGVpbmUgbnVtZXJpc2NoZSBJRDoKCjHvuI/ig6MgRGVpbmUgSUQ6IHRpcHBlIGF1ZiAiTWVpbmUgbnVtZXJpc2NoZSBJRCIuCjLvuI/ig6MgQW5kZXJlciBOdXR6ZXI6IGxlaXRlIGVpbmUgc2VpbmVyIE5hY2hyaWNodGVuIGFuIGRlbiBCb3Qgd2VpdGVyLgoz77iP4oOjIMOWZmZlbnRsaWNoZXIgS2FuYWwvR3J1cHBlOiBzZW5kZSBkZW4gQEJlbnV0emVybmFtZW4gb2RlciBsZWl0ZSBlaW5lbiBCZWl0cmFnIHdlaXRlci4KNO+4j+KDoyBQcml2YXRlciBLYW5hbC9HcnVwcGU6IGbDvGdlIGRlbiBCb3QgYWxzIEFkbWluIGhpbnp1OyBkaWUgSUQgd2lyZCBhdXRvbWF0aXNjaCBnZXNlbmRldC4="), header_found: _dec("8J+GlCBHZWZ1bmRlbmUgSW5mb3JtYXRpb25lbg=="), lbl_name: _dec("8J+RpCBOYW1l"), lbl_username: _dec("8J+UlyBCZW51dHplcm5hbWU="), lbl_id: _dec("8J+GlCBOdW1lcmlzY2hlIElE"), lbl_type: _dec("8J+TgiBUeXA="), lbl_none: _dec("S2VpbmU="), type_user: _dec("TnV0emVy"), type_group: _dec("R3J1cHBl"), type_channel: _dec("S2FuYWw="), type_supergroup: _dec("U3VwZXJncnVwcGU="), not_found: _dec("4pqg77iPIE5pY2h0cyBnZWZ1bmRlbi4gRGF0ZW5zY2h1dHoga8O2bm50ZSBha3RpdmllcnQgc2Vpbi4="), lock_msg: _dec("8J+UkiBEdSBtdXNzdCB6dWVyc3QgRm9sZ2VuZGVtIGJlaXRyZXRlbjo="), btn_check_join: _dec("4pyFIEVybmV1dCBwcsO8ZmVu"), joined_ok: _dec("4pyFIE1pdGdsaWVkc2NoYWZ0IGJlc3TDpHRpZ3Qh"), still_locked: _dec("4p2MIER1IGJpc3Qgbm9jaCBuaWNodCBhbGxlbSBiZWlnZXRyZXRlbi4=") },
  pt: { welcome: _dec("8J+RiyBCZW0tdmluZG8h"), lang_saved: _dec("4pyFIElkaW9tYSBzYWx2by4="), menu_text: _dec("8J+PoCBNZW51IHByaW5jaXBhbCDigJQgZXNjb2xoYSB1bWEgb3DDp8Ojbzo="), btn_myid: _dec("8J+GlCBNZXUgSUQgbnVtw6lyaWNv"), btn_help: _dec("4p2TIEFqdWRh"), btn_admin: _dec("8J+boCBQYWluZWwgYWRtaW4="), help_text: _dec("8J+TjCBDb21vIGVuY29udHJhciB1bSBJRCBudW3DqXJpY286Cgox77iP4oOjIFNldSBJRDogdG9xdWUgZW0gIk1ldSBJRCBudW3DqXJpY28iLgoy77iP4oOjIE91dHJvIHVzdcOhcmlvOiBlbmNhbWluaGUgdW1hIG1lbnNhZ2VtIGRlbGUgcGFyYSBvIGJvdC4KM++4j+KDoyBDYW5hbC9ncnVwbyBww7pibGljbzogZW52aWUgbyBAdXN1w6FyaW8gb3UgZW5jYW1pbmhlIHVtYSBwdWJsaWNhw6fDo28uCjTvuI/ig6MgQ2FuYWwvZ3J1cG8gcHJpdmFkbzogYWRpY2lvbmUgbyBib3QgY29tbyBhZG1pbjsgbyBJRCDDqSBlbnZpYWRvIGF1dG9tYXRpY2FtZW50ZS4="), header_found: _dec("8J+GlCBJbmZvcm1hw6fDtWVzIGVuY29udHJhZGFz"), lbl_name: _dec("8J+RpCBOb21l"), lbl_username: _dec("8J+UlyBVc3XDoXJpbw=="), lbl_id: _dec("8J+GlCBJRCBudW3DqXJpY28="), lbl_type: _dec("8J+TgiBUaXBv"), lbl_none: _dec("TmVuaHVt"), type_user: _dec("VXN1w6FyaW8="), type_group: _dec("R3J1cG8="), type_channel: _dec("Q2FuYWw="), type_supergroup: _dec("U3VwZXJncnVwbw=="), not_found: _dec("4pqg77iPIE5hZGEgZW5jb250cmFkby4gQSBwcml2YWNpZGFkZSBwb2RlIGVzdGFyIGF0aXZhZGEu"), lock_msg: _dec("8J+UkiBWb2PDqiBkZXZlIGVudHJhciBub3Mgc2VndWludGVzIHByaW1laXJvOg=="), btn_check_join: _dec("4pyFIFZlcmlmaWNhciBub3ZhbWVudGU="), joined_ok: _dec("4pyFIEFzc29jaWHDp8OjbyBjb25maXJtYWRhIQ=="), still_locked: _dec("4p2MIFZvY8OqIGFpbmRhIG7Do28gZW50cm91IGVtIHR1ZG8u") },
  it: { welcome: _dec("8J+RiyBCZW52ZW51dG8h"), lang_saved: _dec("4pyFIExpbmd1YSBzYWx2YXRhLg=="), menu_text: _dec("8J+PoCBNZW51IHByaW5jaXBhbGUg4oCUIHNjZWdsaSB1bidvcHppb25lOg=="), btn_myid: _dec("8J+GlCBJbCBtaW8gSUQgbnVtZXJpY28="), btn_help: _dec("4p2TIEFpdXRv"), btn_admin: _dec("8J+boCBQYW5uZWxsbyBhZG1pbg=="), help_text: _dec("8J+TjCBDb21lIHRyb3ZhcmUgdW4gSUQgbnVtZXJpY286Cgox77iP4oOjIElsIHR1byBJRDogdG9jY2EgIklsIG1pbyBJRCBudW1lcmljbyIuCjLvuI/ig6MgVW4gYWx0cm8gdXRlbnRlOiBpbm9sdHJhIHVuIHN1byBtZXNzYWdnaW8gYWwgYm90Lgoz77iP4oOjIENhbmFsZS9ncnVwcG8gcHViYmxpY286IGludmlhIEB1c2VybmFtZSBvIGlub2x0cmEgdW4gcG9zdC4KNO+4j+KDoyBDYW5hbGUvZ3J1cHBvIHByaXZhdG86IGFnZ2l1bmdpIGlsIGJvdCBjb21lIGFkbWluOyBsJ0lEIHZpZW5lIGludmlhdG8gYXV0b21hdGljYW1lbnRlLg=="), header_found: _dec("8J+GlCBJbmZvcm1hemlvbmkgdHJvdmF0ZQ=="), lbl_name: _dec("8J+RpCBOb21l"), lbl_username: _dec("8J+UlyBVc2VybmFtZQ=="), lbl_id: _dec("8J+GlCBJRCBudW1lcmljbw=="), lbl_type: _dec("8J+TgiBUaXBv"), lbl_none: _dec("TmVzc3Vubw=="), type_user: _dec("VXRlbnRl"), type_group: _dec("R3J1cHBv"), type_channel: _dec("Q2FuYWxl"), type_supergroup: _dec("U3VwZXJncnVwcG8="), not_found: _dec("4pqg77iPIE51bGxhIHRyb3ZhdG8uIExhIHByaXZhY3kgcG90cmViYmUgZXNzZXJlIGF0dGl2YS4="), lock_msg: _dec("8J+UkiBEZXZpIHByaW1hIHVuaXJ0aSBhIHF1YW50byBzZWd1ZTo="), btn_check_join: _dec("4pyFIENvbnRyb2xsYSBkaSBudW92bw=="), joined_ok: _dec("4pyFIElzY3JpemlvbmUgY29uZmVybWF0YSE="), still_locked: _dec("4p2MIE5vbiBoYWkgYW5jb3JhIGFkZXJpdG8gYSB0dXR0by4=") },
  hi: { welcome: _dec("8J+RiyDgpLjgpY3gpLXgpL7gpJfgpKQg4KS54KWIIQ=="), lang_saved: _dec("4pyFIOCkreCkvuCkt+CkviDgpLjgpYfgpLUg4KS54KWLIOCkl+CkiOClpA=="), menu_text: _dec("8J+PoCDgpK7gpYHgpJbgpY3gpK8g4KSu4KWH4KSo4KWCIOKAlCDgpI/gpJUg4KS14KS/4KSV4KSy4KWN4KSqIOCkmuClgeCkqOClh+Ckgjo="), btn_myid: _dec("8J+GlCDgpK7gpYfgpLDgpYAg4KSG4KSI4KSh4KWA"), btn_help: _dec("4p2TIOCkruCkpuCkpg=="), btn_admin: _dec("8J+boCDgpI/gpKHgpK7gpL/gpKgg4KSq4KWI4KSo4KSy"), help_text: _dec("8J+TjCDgpKjgpY3gpK/gpYLgpK7gpYfgpLDgpL/gpJUg4KSG4KSI4KSh4KWAIOCkleCliOCkuOClhyDgpJbgpYvgpJzgpYfgpII6Cgox77iP4oOjIOCkheCkquCkqOClgCDgpIbgpIjgpKHgpYA6ICLgpK7gpYfgpLDgpYAg4KSG4KSI4KSh4KWAIiDgpKbgpKzgpL7gpI/gpILgpaQKMu+4j+KDoyDgpJXgpL/gpLjgpYAg4KSU4KSwIOCkleClgDog4KSJ4KS44KSV4KS+IOCkruCliOCkuOClh+CknCDgpKzgpYngpJ8g4KSV4KWLIOCkq+ClieCksOCkteCksOCljeCkoSDgpJXgpLDgpYfgpILgpaQKM++4j+KDoyDgpKrgpKzgpY3gpLLgpL/gpJUg4KSa4KWI4KSo4KSyL+Ckl+CljeCksOClgeCkqjogQHVzZXJuYW1lIOCkreClh+CknOClh+CkgiDgpK/gpL4g4KSq4KWL4KS44KWN4KSfIOCkq+ClieCksOCkteCksOCljeCkoSDgpJXgpLDgpYfgpILgpaQKNO+4j+KDoyDgpKrgpY3gpLDgpL7gpIfgpLXgpYfgpJ8g4KSa4KWI4KSo4KSyL+Ckl+CljeCksOClgeCkqjog4KSs4KWJ4KSfIOCkleCliyDgpI/gpKHgpK7gpL/gpKgg4KSs4KSo4KS+4KSP4KSCOyDgpIbgpIjgpKHgpYAg4KSW4KWB4KSmIOCkreClh+CknCDgpKbgpYAg4KSc4KS+4KSP4KSX4KWA4KWk"), header_found: _dec("8J+GlCDgpK7gpL/gpLLgpYAg4KSc4KS+4KSo4KSV4KS+4KSw4KWA"), lbl_name: _dec("8J+RpCDgpKjgpL7gpK4="), lbl_username: _dec("8J+UlyDgpK/gpYLgpJzgpLzgpLDgpKjgpYfgpK4="), lbl_id: _dec("8J+GlCDgpIbgpIjgpKHgpYA="), lbl_type: _dec("8J+TgiDgpKrgpY3gpLDgpJXgpL7gpLA="), lbl_none: _dec("4KSo4KS54KWA4KSC"), type_user: _dec("4KSJ4KSq4KSv4KWL4KSX4KSV4KSw4KWN4KSk4KS+"), type_group: _dec("4KSX4KWN4KSw4KWB4KSq"), type_channel: _dec("4KSa4KWI4KSo4KSy"), type_supergroup: _dec("4KS44KWB4KSq4KSw4KSX4KWN4KSw4KWB4KSq"), not_found: _dec("4pqg77iPIOCkleClgeCkmyDgpKjgpLngpYDgpIIg4KSu4KS/4KSy4KS+4KWkIOCkquCljeCksOCkvuCkh+CkteClh+CkuOClgCDgpJrgpL7gpLLgpYIg4KS54KWLIOCkuOCkleCkpOClgCDgpLngpYjgpaQ="), lock_msg: _dec("8J+UkiDgpKrgpLngpLLgpYcg4KSH4KSo4KSu4KWH4KSCIOCktuCkvuCkruCkv+CksiDgpLngpYvgpII6"), btn_check_join: _dec("4pyFIOCkq+Ckv+CksCDgpLjgpYcg4KSc4KS+4KSC4KSa4KWH4KSC"), joined_ok: _dec("4pyFIOCkuOCkpuCkuOCljeCkr+CkpOCkviDgpJXgpYAg4KSq4KWB4KS34KWN4KSf4KS/IOCkueClgeCkiCE="), still_locked: _dec("4p2MIOCkhuCkqiDgpIXgpK3gpYAg4KS44KSs4KSu4KWH4KSCIOCktuCkvuCkruCkv+CksiDgpKjgpLngpYDgpIIg4KS54KWB4KSP4KWk") },
  ur: { welcome: _dec("8J+RiyDYrtmI2LQg2KLZhdiv24zYryE="), lang_saved: _dec("4pyFINiy2KjYp9mGINmF2K3ZgdmI2Lgg24HZiNqv2KbbjNuU"), menu_text: _dec("8J+PoCDZhdix2qnYstuMINmF24zZhtmIIOKAlCDYp9uM2qkg2KLZvti02YYg2YXZhtiq2K7YqCDaqdix24zaujo="), btn_myid: _dec("8J+GlCDZhduM2LHbjCDYotim24wg2ojbjA=="), btn_help: _dec("4p2TINmF2K/Yrw=="), btn_admin: _dec("8J+boCDYp9uM2ojZhdmGINm+24zZhtmE"), help_text: _dec("8J+TjCDYudiv2K/bjCDYotim24wg2ojbjCDaqduM2LPbkiDYqtmE2KfYtCDaqdix24zaujoKCjHvuI/ig6Mg2KfZvtmG24wg2KLYptuMINqI24w6ICLZhduM2LHbjCDYotim24wg2ojbjCIg2K/YqNin2KbbjNq625QKMu+4j+KDoyDYr9mI2LPYsdinINi12KfYsdmBOiDYp9izINqp2Kcg2b7bjNi62KfZhSDYqNmI2bkg2qnZiCDZgdin2LHZiNix2ogg2qnYsduM2rrblAoz77iP4oOjINi52YjYp9mF24wg2obbjNmG2YQv2q/YsdmI2b46IEB1c2VybmFtZSDYqNq+24zYrNuM2rog24zYpyDZvtmI2LPZuSDZgdin2LHZiNix2ogg2qnYsduM2rrblAo077iP4oOjINmG2KzbjCDahtuM2YbZhC/ar9ix2YjZvjog2KjZiNm5INqp2Ygg2KfbjNqI2YXZhiDYqNmG2KfYptuM2rrYmyDYotim24wg2ojbjCDYrtmI2K/aqdin2LEg2KjavtuM2KzbjCDYrNin2KbbkiDar9uM25Q="), header_found: _dec("8J+GlCDYrdin2LXZhCDYtNiv24Eg2YXYudmE2YjZhdin2Ko="), lbl_name: _dec("8J+RpCDZhtin2YU="), lbl_username: _dec("8J+UlyDbjNmI2LLYsdmG24zZhQ=="), lbl_id: _dec("8J+GlCDYotim24wg2ojbjA=="), lbl_type: _dec("8J+TgiDZgtiz2YU="), lbl_none: _dec("2qnZiNim24wg2YbbgduM2ro="), type_user: _dec("2LXYp9ix2YE="), type_group: _dec("2q/YsdmI2b4="), type_channel: _dec("2obbjNmG2YQ="), type_supergroup: _dec("2LPZvtixINqv2LHZiNm+"), not_found: _dec("4pqg77iPINqp2obaviDZhtuB24zauiDZhdmE2KfblCDZvtix2KfYptuM2YjbjNiz24wg2KLZhiDbgdmI2LPaqdiq24wg24HbktuU"), lock_msg: _dec("8J+UkiDZvtuB2YTbkiDYp9mGINmF24zauiDYtNin2YXZhCDbgdmI2ro6"), btn_check_join: _dec("4pyFINiv2YjYqNin2LHbgSDahtuM2qkg2qnYsduM2ro="), joined_ok: _dec("4pyFINix2qnZhtuM2Kog2qnbjCDYqti12K/bjNmCINuB2Yjar9im24wh"), still_locked: _dec("4p2MINii2b4g2KfYqNq+24wg2LPYqCDZhduM2rog2LTYp9mF2YQg2YbbgduM2rog24HZiNim25LblA==") },
  az: { welcome: _dec("8J+RiyBYb8WfIGfJmWxtaXNpbml6IQ=="), lang_saved: _dec("4pyFIERpbCBzYXhsYW7EsWxkxLEu"), menu_text: _dec("8J+PoCDGj3NhcyBtZW55dSDigJQgc2XDp2ltIGVkaW46"), btn_myid: _dec("8J+GlCBNyZluaW0gSUQtbQ=="), btn_help: _dec("4p2TIEvDtm3JmWs="), btn_admin: _dec("8J+boCBBZG1pbiBwYW5lbGk="), help_text: _dec("8J+TjCBSyZlxyZltc2FsIElEIG5lY8mZIHRhcMSxbMSxcjoKCjHvuI/ig6Mgw5Z6IElELW5pejogIk3JmW5pbSBJRC1tIiBkw7x5bcmZc2luaSBiYXPEsW4uCjLvuI/ig6MgQmHFn3FhIGlzdGlmYWTJmcOnaTogbWVzYWrEsW7EsSBib3RhIHnDtm5syZluZGlyaW4uCjPvuI/ig6MgSWN0aW1haSBrYW5hbC9xcnVwOiBAdXNlcm5hbWUgZ8O2bmTJmXJpbiB2yZkgeWEgcGF5bGHFn8SxbcSxIHnDtm5syZluZGlyaW4uCjTvuI/ig6MgxZ7JmXhzaSBrYW5hbC9xcnVwOiBib3R1IGFkbWluIGVkaW47IElEIGF2dG9tYXRpayBnw7ZuZMmZcmlsyZljyZlrLg=="), header_found: _dec("8J+GlCBUYXDEsWxhbiBtyZlsdW1hdA=="), lbl_name: _dec("8J+RpCBBZA=="), lbl_username: _dec("8J+UlyDEsHN0aWZhZMmZw6dpIGFkxLE="), lbl_id: _dec("8J+GlCBSyZlxyZltc2FsIElE"), lbl_type: _dec("8J+TgiBOw7Z2"), lbl_none: _dec("WW94ZHVy"), type_user: _dec("xLBzdGlmYWTJmcOnaQ=="), type_group: _dec("UXJ1cA=="), type_channel: _dec("S2FuYWw="), type_supergroup: _dec("U3VwZXJxcnVw"), not_found: _dec("4pqg77iPIEhlw6cgbsmZIHRhcMSxbG1hZMSxLiBNyZl4ZmlsaWsgYWt0aXYgb2xhIGJpbMmZci4="), lock_msg: _dec("8J+UkiDGj3Z2yZlsY8mZIGHFn2HEn8SxZGFrxLFsYXJhIHFvxZ91bG1hbMSxc8SxbsSxejo="), btn_check_join: _dec("4pyFIFllbmlkyZluIHlveGxh"), joined_ok: _dec("4pyFIMOcenZsw7xrIHTJmXNkaXFsyZluZGkh"), still_locked: _dec("4p2MIEjJmWzJmSBoYW3EsXPEsW5hIHFvxZ91bG1hbcSxc8SxbsSxei4=") },
  uz: { welcome: _dec("8J+RiyBYdXNoIGtlbGlic2l6IQ=="), lang_saved: _dec("4pyFIFRpbCBzYXFsYW5kaS4="), menu_text: _dec("8J+PoCBBc29zaXkgbWVueXUg4oCUIHRhbmxhbmc6"), btn_myid: _dec("8J+GlCBNZW5pbmcgSUQgcmFxYW1pbQ=="), btn_help: _dec("4p2TIFlvcmRhbQ=="), btn_admin: _dec("8J+boCBBZG1pbiBwYW5lbA=="), help_text: _dec("8J+TjCBSYXFhbWxpIElEIHFhbmRheSB0b3BpbGFkaToKCjHvuI/ig6MgTyd6IElEOiAiTWVuaW5nIElEIHJhcWFtaW0iIHR1Z21hc2luaSBib3NpbmcuCjLvuI/ig6MgQm9zaHFhIGZveWRhbGFudXZjaGk6IHVuaW5nIHhhYmFyaW5pIGJvdGdhIGZvcndhcmQgcWlsaW5nLgoz77iP4oOjIE9tbWF2aXkga2FuYWwvZ3VydWg6IEB1c2VybmFtZSB5dWJvcmluZyB5b2tpIHBvc3RuaSBmb3J3YXJkIHFpbGluZy4KNO+4j+KDoyBNYXhmaXkga2FuYWwvZ3VydWg6IGJvdG5pIGFkbWluIHFpbGluZzsgSUQgYXZ0b21hdGlrIHl1Ym9yaWxhZGku"), header_found: _dec("8J+GlCBUb3BpbGdhbiBtYSdsdW1vdA=="), lbl_name: _dec("8J+RpCBJc20="), lbl_username: _dec("8J+UlyBVc2VybmFtZQ=="), lbl_id: _dec("8J+GlCBSYXFhbWxpIElE"), lbl_type: _dec("8J+TgiBUdXJp"), lbl_none: _dec("WW8ncQ=="), type_user: _dec("Rm95ZGFsYW51dmNoaQ=="), type_group: _dec("R3VydWg="), type_channel: _dec("S2FuYWw="), type_supergroup: _dec("U3VwZXJndXJ1aA=="), not_found: _dec("4pqg77iPIEhlY2ggbmFyc2EgdG9waWxtYWRpLiBNYXhmaXlsaWsgeW9xaWxnYW4gYm8nbGlzaGkgbXVta2luLg=="), lock_msg: _dec("8J+UkiBBdnZhbCBxdXlpZGFnaWxhcmdhIHFvJ3NoaWxpbmc6"), btn_check_join: _dec("4pyFIFFheXRhIHRla3NoaXJpc2g="), joined_ok: _dec("4pyFIEEnem9saWsgdGFzZGlxbGFuZGkh"), still_locked: _dec("4p2MIEhhbGkgaGFtbWFzaWdhIHFvJ3NoaWxtYWRpbmdpei4=") },
  id: { welcome: _dec("8J+RiyBTZWxhbWF0IGRhdGFuZyE="), lang_saved: _dec("4pyFIEJhaGFzYSBkaXNpbXBhbi4="), menu_text: _dec("8J+PoCBNZW51IHV0YW1hIOKAlCBwaWxpaCBvcHNpOg=="), btn_myid: _dec("8J+GlCBJRCBudW1lcmlrIHNheWE="), btn_help: _dec("4p2TIEJhbnR1YW4="), btn_admin: _dec("8J+boCBQYW5lbCBhZG1pbg=="), help_text: _dec("8J+TjCBDYXJhIG1lbmVtdWthbiBJRCBudW1lcmlrOgoKMe+4j+KDoyBJRCBBbmRhOiB0ZWthbiAiSUQgbnVtZXJpayBzYXlhIi4KMu+4j+KDoyBQZW5nZ3VuYSBsYWluOiB0ZXJ1c2thbiBwZXNhbm55YSBrZSBib3QuCjPvuI/ig6MgQ2hhbm5lbC9ncnVwIHB1Ymxpazoga2lyaW0gQHVzZXJuYW1lIGF0YXUgdGVydXNrYW4gcG9zdGluZ2FuLgo077iP4oOjIENoYW5uZWwvZ3J1cCBwcml2YXQ6IGphZGlrYW4gYm90IGFkbWluOyBJRCBha2FuIGRpa2lyaW0gb3RvbWF0aXMu"), header_found: _dec("8J+GlCBJbmZvcm1hc2kgZGl0ZW11a2Fu"), lbl_name: _dec("8J+RpCBOYW1h"), lbl_username: _dec("8J+UlyBVc2VybmFtZQ=="), lbl_id: _dec("8J+GlCBJRCBudW1lcmlr"), lbl_type: _dec("8J+TgiBUaXBl"), lbl_none: _dec("VGlkYWsgYWRh"), type_user: _dec("UGVuZ2d1bmE="), type_group: _dec("R3J1cA=="), type_channel: _dec("Q2hhbm5lbA=="), type_supergroup: _dec("U3VwZXJncnVw"), not_found: _dec("4pqg77iPIFRpZGFrIGRpdGVtdWthbi4gUHJpdmFzaSBtdW5na2luIGFrdGlmLg=="), lock_msg: _dec("8J+UkiBBbmRhIGhhcnVzIGJlcmdhYnVuZyBkZW5nYW4gYmVyaWt1dCBpbmkgZGFodWx1Og=="), btn_check_join: _dec("4pyFIFBlcmlrc2EgbGFnaQ=="), joined_ok: _dec("4pyFIEtlYW5nZ290YWFuIGRpa29uZmlybWFzaSE="), still_locked: _dec("4p2MIEFuZGEgYmVsdW0gYmVyZ2FidW5nIGRlbmdhbiBzZW11YW55YS4=") },
};

function _0x065(_0x037, _0x035) {
  return (_0x001[_0x037] && _0x001[_0x037][_0x035]) || _0x001.en[_0x035] || _0x035;
}

// ---------------------------------------------------------------------
// Telegram API helper
// ---------------------------------------------------------------------
async function _0x064(_0x01c, _0x03c, _0x00a) {
  const _0x04e = await fetch(`https://api.telegram.org/bot${_0x01c.BOT_TOKEN}/${_0x03c}`, {
    method: _dec("UE9TVA=="),
    headers: { 'Content-Type': _dec("YXBwbGljYXRpb24vanNvbg==") },
    body: JSON.stringify(_0x00a),
  });
  return _0x04e.json();
}

// ---------------------------------------------------------------------
// KV helpers
// ---------------------------------------------------------------------
async function _0x026(_0x01c, _0x02e) {
  const _0x070 = await _0x01c.BOT_KV.get(`user_${_0x02e}`);
  return _0x070 ? JSON.parse(_0x070) : null;
}
async function _0x055(_0x01c, _0x068) {
  await _0x01c.BOT_KV.put(`user_${_0x068.id}`, JSON.stringify(_0x068));
}
async function _0x039(_0x01c) {
  let _0x02f = [];
  let _0x017;
  do {
    const _0x043 = await _0x01c.BOT_KV.list({ prefix: _dec("dXNlcl8="), cursor: _0x017 });
    _0x02f = _0x02f.concat(_0x043.keys.map((_0x033) => _0x033.name.replace(_dec("dXNlcl8="), _dec(""))));
    _0x017 = _0x043.list_complete ? undefined : _0x043.cursor;
  } while (_0x017);
  return _0x02f;
}

async function _0x022(_0x01c) {
  const _0x070 = await _0x01c.BOT_KV.get(_dec("bG9ja3M="));
  return _0x070 ? JSON.parse(_0x070) : [];
}
async function _0x054(_0x01c, _0x008) {
  await _0x01c.BOT_KV.put(_dec("bG9ja3M="), JSON.stringify(_0x008));
}

async function _0x021(_0x01c) {
  const _0x070 = await _0x01c.BOT_KV.get(_dec("YWRz"));
  return _0x070 ? JSON.parse(_0x070) : [];
}
async function _0x053(_0x01c, _0x008) {
  await _0x01c.BOT_KV.put(_dec("YWRz"), JSON.stringify(_0x008));
}

async function _0x024(_0x01c, _0x02e) {
  const _0x070 = await _0x01c.BOT_KV.get(`state_${_0x02e}`);
  return _0x070 ? JSON.parse(_0x070) : null;
}
async function _0x05d(_0x01c, _0x02e, _0x060) {
  await _0x01c.BOT_KV.put(`state_${_0x02e}`, JSON.stringify(_0x060), { expirationTtl: 3600 });
}
async function _0x013(_0x01c, _0x02e) {
  await _0x01c.BOT_KV.delete(`state_${_0x02e}`);
}

// ---------------------------------------------------------------------
// "Single message" helpers — instead of sending a fresh message every
// time, we remember the bot's last message per chat/slot and edit it
// in place. This keeps the chat from filling up with old messages.
// ---------------------------------------------------------------------
async function _0x023(_0x01c, _0x010, _0x05f) {
  const _0x070 = await _0x01c.BOT_KV.get(`msg_${_0x05f}_${_0x010}`);
  return _0x070 ? Number(_0x070) : null;
}
async function _0x05c(_0x01c, _0x010, _0x05f, _0x02e) {
  await _0x01c.BOT_KV.put(`msg_${_0x05f}_${_0x010}`, String(_0x02e), { expirationTtl: 86400 });
}
async function _0x012(_0x01c, _0x010, _0x05f) {
  await _0x01c.BOT_KV.delete(`msg_${_0x05f}_${_0x010}`);
}

// Sends payload as the chat's "main" message. If a previous main
// message exists (either passed in as editId, e.g. from a button
// press, or remembered from last time), it edits that message in
// place instead of sending a new one. Falls back to delete+send only
// when editing isn't possible (e.g. message too old / deleted).
// Pass forceNew=true to always delete the old one and send a brand
// new message (used for /start).
async function _0x048(_0x01c, _0x010, _0x044, _0x01b, _0x01e) {
  const _0x062 = _0x01b || (await _0x023(_0x01c, _0x010, _dec("bWFpbg==")));
  const _0x00a = {
    chat_id: _0x010,
    text: _0x044.text,
    parse_mode: _0x044.parse_mode,
    reply_markup: _0x044.reply_markup || { inline_keyboard: [] },
  };
  if (_0x062 && !_0x01e) {
    const _0x04e = await _0x064(_0x01c, _dec("ZWRpdE1lc3NhZ2VUZXh0"), { ..._0x00a, message_id: _0x062 });
    if (_0x04e.ok) {
      await _0x05c(_0x01c, _0x010, _dec("bWFpbg=="), _0x062);
      return _0x04e;
    }
    const _0x019 = ((_0x04e.description || _dec("")) + _dec("")).toLowerCase();
    if (_0x019.includes(_dec("bm90IG1vZGlmaWVk"))) {
      await _0x05c(_0x01c, _0x010, _dec("bWFpbg=="), _0x062);
      return _0x04e;
    }
    try {
      await _0x064(_0x01c, _dec("ZGVsZXRlTWVzc2FnZQ=="), { chat_id: _0x010, message_id: _0x062 });
    } catch (_0x01a) {}
  } else if (_0x062 && _0x01e) {
    try {
      await _0x064(_0x01c, _dec("ZGVsZXRlTWVzc2FnZQ=="), { chat_id: _0x010, message_id: _0x062 });
    } catch (_0x01a) {}
  }
  const _0x05b = await _0x064(_0x01c, _dec("c2VuZE1lc3NhZ2U="), _0x00a);
  if (_0x05b.ok) await _0x05c(_0x01c, _0x010, _dec("bWFpbg=="), _0x05b.result.message_id);
  return _0x05b;
}

function _0x020(_0x01c) {
  return (_0x01c.ADMIN_IDS || _dec(""))
    .split(_dec("LA=="))
    .map((_0x052) => _0x052.trim())
    .filter(Boolean)
    .map(Number);
}
function _0x032(_0x01c, _0x02e) {
  return _0x020(_0x01c).includes(Number(_0x02e));
}
function _0x05e() {
  return Math.random().toString(36).slice(2, 8) + Date.now().toString(36).slice(-4);
}

// ---------------------------------------------------------------------
// UI builders
// ---------------------------------------------------------------------
async function _0x058(_0x01c, _0x010, _0x01b) {
  const _0x051 = [];
  for (let _0x02d = 0; _0x02d < _0x000.length; _0x02d += 2) {
    const _0x050 = _0x000.slice(_0x02d, _0x02d + 2).map((_0x036) => ({
      text: `${_0x036.flag} ${_0x036.name}`,
      callback_data: `lang_set_${_0x036.code}`,
    }));
    _0x051.push(_0x050);
  }
  await _0x048(
    _0x01c,
    _0x010,
    {
      text: _dec("8J+MkCBQbGVhc2UgY2hvb3NlIHlvdXIgbGFuZ3VhZ2UgLyDZhNi32YHYpyDYstio2KfZhiDYrtmI2K8g2LHYpyDYp9mG2KrYrtin2Kgg2qnZhtuM2K86"),
      reply_markup: { inline_keyboard: _0x051 },
    },
    _0x01b
  );
}

async function _0x05a(_0x01c, _0x010, _0x037, _0x004, _0x01b, _0x045, _0x01e) {
  const _0x034 = [
    [{ text: _0x065(_0x037, _dec("YnRuX215aWQ=")), callback_data: _dec("YWN0X215aWQ=") }],
    [{ text: _0x065(_0x037, _dec("YnRuX2hlbHA=")), callback_data: _dec("YWN0X2hlbHA=") }],
  ];
  if (_0x004) _0x034.push([{ text: _0x065(_0x037, _dec("YnRuX2FkbWlu")), callback_data: _dec("YWRtaW5fbWVudQ==") }]);
  await _0x048(
    _0x01c,
    _0x010,
    {
      text: `${_0x045 ? _0x045 + _dec("Cgo=") : _dec("")}${_0x065(_0x037, _dec("d2VsY29tZQ=="))}\n\n${_0x065(_0x037, _dec("bWVudV90ZXh0"))}`,
      reply_markup: { inline_keyboard: _0x034 },
    },
    _0x01b,
    _0x01e
  );
}

function _0x067(_0x037, _0x066) {
  if (_0x066 === _dec("cHJpdmF0ZQ==")) return _0x065(_0x037, _dec("dHlwZV91c2Vy"));
  if (_0x066 === _dec("Z3JvdXA=")) return _0x065(_0x037, _dec("dHlwZV9ncm91cA=="));
  if (_0x066 === _dec("c3VwZXJncm91cA==")) return _0x065(_0x037, _dec("dHlwZV9zdXBlcmdyb3Vw"));
  if (_0x066 === _dec("Y2hhbm5lbA==")) return _0x065(_0x037, _dec("dHlwZV9jaGFubmVs"));
  return _0x066 || _dec("LQ==");
}

function _0x00c(_0x037, _0x068) {
  const _0x040 = [_0x068.first_name, _0x068.last_name].filter(Boolean).join(_dec("IA==")) || _dec("LQ==");
  return (
    `${_0x065(_0x037, _dec("aGVhZGVyX2ZvdW5k"))}\n\n` +
    `${_0x065(_0x037, _dec("bGJsX3R5cGU="))}: ${_0x065(_0x037, _dec("dHlwZV91c2Vy"))}\n` +
    `${_0x065(_0x037, _dec("bGJsX25hbWU="))}: ${_0x040}\n` +
    `${_0x065(_0x037, _dec("bGJsX3VzZXJuYW1l"))}: ${_0x068.username ? _dec("QA==") + _0x068.username : _0x065(_0x037, _dec("bGJsX25vbmU="))}\n` +
    `${_0x065(_0x037, _dec("bGJsX2lk"))}: <code>${_0x068.id}</code>`
  );
}
function _0x00b(_0x037, _0x00d) {
  return (
    `${_0x065(_0x037, _dec("aGVhZGVyX2ZvdW5k"))}\n\n` +
    `${_0x065(_0x037, _dec("bGJsX3R5cGU="))}: ${_0x067(_0x037, _0x00d.type)}\n` +
    `${_0x065(_0x037, _dec("bGJsX25hbWU="))}: ${_0x00d.title || _dec("LQ==")}\n` +
    `${_0x065(_0x037, _dec("bGJsX3VzZXJuYW1l"))}: ${_0x00d.username ? _dec("QA==") + _0x00d.username : _0x065(_0x037, _dec("bGJsX25vbmU="))}\n` +
    `${_0x065(_0x037, _dec("bGJsX2lk"))}: <code>${_0x00d.id}</code>`
  );
}

// Appends any enabled "text" ads directly under the given text (e.g.
// under the "found info" block), in the SAME message — no extra
// message is sent for these.
async function _0x007(_0x01c, _0x009) {
  const _0x006 = (await _0x021(_0x01c)).filter((_0x002) => _0x002.enabled && _0x002.mode === _dec("dGV4dA==") && _0x002.content);
  if (!_0x006.length) return _0x009;
  return `${_0x009}\n\n${_0x006.map((_0x002) => _0x002.content).join(_dec("Cgo="))}`;
}

async function _0x056(_0x01c, _0x010) {
  const _0x006 = (await _0x021(_0x01c)).filter((_0x002) => _0x002.enabled && (_0x002.mode === _dec("Zm9yd2FyZA==") || _0x002.mode === _dec("Y29weQ==")));
  if (!_0x006.length) return;
  // remove the previous ad message so ads don't pile up in the chat
  const _0x046 = await _0x023(_0x01c, _0x010, _dec("YWQ="));
  if (_0x046) {
    try {
      await _0x064(_0x01c, _dec("ZGVsZXRlTWVzc2FnZQ=="), { chat_id: _0x010, message_id: _0x046 });
    } catch (_0x01a) {}
    await _0x012(_0x01c, _0x010, _dec("YWQ="));
  }
  for (const _0x003 of _0x006) {
    try {
      let _0x04e;
      if (_0x003.mode === _dec("Zm9yd2FyZA==")) {
        _0x04e = await _0x064(_0x01c, _dec("Zm9yd2FyZE1lc3NhZ2U="), { chat_id: _0x010, from_chat_id: _0x003.from_chat_id, message_id: _0x003.message_id });
      } else {
        _0x04e = await _0x064(_0x01c, _dec("Y29weU1lc3NhZ2U="), { chat_id: _0x010, from_chat_id: _0x003.from_chat_id, message_id: _0x003.message_id });
      }
      if (_0x04e && _0x04e.ok) await _0x05c(_0x01c, _0x010, _dec("YWQ="), _0x04e.result.message_id);
    } catch (_0x01a) {
      /* ignore single ad failure */
    }
  }
}

// ---------------------------------------------------------------------
// Lock (force-join) logic
// ---------------------------------------------------------------------
async function _0x025(_0x01c, _0x06e) {
  const _0x03a = (await _0x022(_0x01c)).filter((_0x036) => _0x036.enabled);
  const _0x04f = [];
  for (const _0x036 of _0x03a) {
    try {
      const _0x049 = await _0x064(_0x01c, _dec("Z2V0Q2hhdE1lbWJlcg=="), { chat_id: _0x036.chat, user_id: _0x06e });
      const _0x061 = _0x049.result && _0x049.result.status;
      if (!_0x049.ok || [_dec("bGVmdA=="), _dec("a2lja2Vk")].includes(_0x061)) _0x04f.push(_0x036);
    } catch (_0x01a) {
      _0x04f.push(_0x036);
    }
  }
  return _0x04f;
}

async function _0x059(_0x01c, _0x010, _0x037, _0x03a, _0x01b, _0x045) {
  const _0x051 = _0x03a.map((_0x036) => [{ text: `🔗 ${_0x036.title}`, url: _0x036.link || `https://t.me/${(_0x036.username || _dec("")).replace(_dec("QA=="), _dec(""))}` }]);
  _0x051.push([{ text: _0x065(_0x037, _dec("YnRuX2NoZWNrX2pvaW4=")), callback_data: _dec("bG9ja19jaGVjaw==") }]);
  await _0x048(
    _0x01c,
    _0x010,
    {
      text: `${_0x045 ? _0x045 + _dec("Cgo=") : _dec("")}${_0x065(_0x037, _dec("bG9ja19tc2c="))}`,
      reply_markup: { inline_keyboard: _0x051 },
    },
    _0x01b
  );
}

// ---------------------------------------------------------------------
// Admin panel (Persian-only, admin-facing)
// ---------------------------------------------------------------------
async function _0x057(_0x01c, _0x010, _0x01b) {
  await _0x048(
    _0x01c,
    _0x010,
    {
      text: _dec("8J+boCDZvtmG2YQg2YXYr9uM2LHbjNiqINix2KjYp9iq"),
      reply_markup: {
        inline_keyboard: [
          [{ text: _dec("8J+TiiDYotmF2KfYsQ=="), callback_data: _dec("YWRtaW5fc3RhdHM=") }],
          [{ text: _dec("8J+UkiDZhdiv24zYsduM2Kog2YLZgdmE"), callback_data: _dec("YWRtaW5fbG9ja3M=") }],
          [{ text: _dec("8J+ToiDZhdiv24zYsduM2Kog2KrYqNmE24zYutin2Ko="), callback_data: _dec("YWRtaW5fYWRz") }],
          [{ text: _dec("8J+ToyDYp9ix2LPYp9mEINmH2YXar9in2YbbjA=="), callback_data: _dec("YWRtaW5fYnJvYWRjYXN0") }],
        ],
      },
    },
    _0x01b
  );
}

async function _0x04c(_0x01c) {
  const _0x02f = await _0x039(_0x01c);
  const _0x03a = await _0x022(_0x01c);
  const _0x006 = await _0x021(_0x01c);
  return (
    `📊 آمار ربات\n\n` +
    `👥 تعداد کاربران: ${_0x02f.length}\n` +
    `🔒 تعداد قفل‌ها: ${_0x03a.length} (فعال: ${_0x03a.filter((_0x036) => _0x036.enabled).length})\n` +
    `📢 تعداد تبلیغات: ${_0x006.length} (فعال: ${_0x006.filter((_0x002) => _0x002.enabled).length})`
  );
}

async function _0x04b(_0x01c) {
  const _0x03a = await _0x022(_0x01c);
  const _0x051 = [[{ text: _dec("4p6VINin2YHYstmI2K/ZhiDZgtmB2YQg2KzYr9uM2K8="), callback_data: _dec("bG9ja19hZGQ=") }]];
  for (const _0x036 of _0x03a) {
    _0x051.push([
      { text: `${_0x036.enabled ? _dec("4pyF") : _dec("4puU77iP")} ${_0x036.title}`, callback_data: `lock_toggle_${_0x036.id}` },
      { text: _dec("8J+XkSDYrdiw2YE="), callback_data: `lock_del_${_0x036.id}` },
    ]);
  }
  _0x051.push([{ text: _dec("4qyF77iPINio2KfYstqv2LTYqg=="), callback_data: _dec("YWRtaW5fbWVudQ==") }]);
  const _0x063 = _0x03a.length ? _dec("8J+UkiDZhNuM2LPYqiDZgtmB2YTigIzZh9in24wg2KrZhti424zZheKAjNi02K/ZhyAo2KjYsdin24wg2YHYudin2YQv2LrbjNix2YHYudin2YQg2qnYsdiv2YYg2LHZiNuMINmG2KfZhSDYqNiy2YbbjNivKTo=") : _dec("8J+UkiDZh9uM2oYg2YLZgdmE24wg2KrZhti424zZhSDZhti02K/ZhyDYp9iz2Kou");
  return { text: _0x063, reply_markup: { inline_keyboard: _0x051 } };
}

async function _0x04a(_0x01c) {
  const _0x006 = await _0x021(_0x01c);
  const _0x051 = [[{ text: _dec("4p6VINin2YHYstmI2K/ZhiDYqtio2YTbjNi6INis2K/bjNiv"), callback_data: _dec("YWRfYWRk") }]];
  for (const _0x002 of _0x006) {
    const _0x03e = _0x002.mode === _dec("Zm9yd2FyZA==") ? _dec("2YHZiNix2YjYp9ix2K8=") : _0x002.mode === _dec("dGV4dA==") ? _dec("2YXYqtmGINiy24zYsSDZhtiq24zYrNmH") : _dec("2b7bjNin2YUg2LPYp9iv2Yc=");
    _0x051.push([
      { text: `${_0x002.enabled ? _dec("4pyF") : _dec("4puU77iP")} تبلیغ (${_0x03e}) #${_0x002.id}`, callback_data: `ad_toggle_${_0x002.id}` },
      { text: _dec("8J+XkSDYrdiw2YE="), callback_data: `ad_del_${_0x002.id}` },
    ]);
  }
  _0x051.push([{ text: _dec("4qyF77iPINio2KfYstqv2LTYqg=="), callback_data: _dec("YWRtaW5fbWVudQ==") }]);
  const _0x063 = _0x006.length ? _dec("8J+ToiDZhNuM2LPYqiDYqtio2YTbjNi62KfYqiAo2LLbjNixINmH2LEg2YbYqtuM2KzZh+KAjNuMINm+24zYr9inINi02K/ZhiDYotuM2K/bjCDZhtmF2KfbjNi0INiv2KfYr9mHINmF24zigIzYtNmI2K8pOg==") : _dec("8J+ToiDZh9uM2oYg2KrYqNmE24zYutuMINiq2YbYuNuM2YUg2YbYtNiv2Ycg2KfYs9iqLg==");
  return { text: _0x063, reply_markup: { inline_keyboard: _0x051 } };
}

// ---------------------------------------------------------------------
// Admin FSM (multi-step flows: add lock / add ad / broadcast)
// ---------------------------------------------------------------------
async function _0x027(_0x01c, _0x03f, _0x060, _0x01f) {
  const _0x010 = _0x03f.chat.id;

  if (_0x060.step === _dec("bG9ja19hd2FpdGluZ19pbnB1dA==")) {
    let _0x011 = null;
    const _0x063 = (_0x03f.text || _dec("")).trim();
    if (_0x03f.forward_from_chat) _0x011 = String(_0x03f.forward_from_chat.id);
    else if (_0x063.startsWith(_dec("QA=="))) _0x011 = _0x063;
    else if (/^-100\d+$/.test(_0x063)) _0x011 = _0x063;

    if (!_0x011) {
      await _0x048(_0x01c, _0x010, { text: _dec("4pqg77iPINmI2LHZiNiv24wg2YbYp9mF2LnYqtio2LEg2KfYs9iqLiDbjNmI2LLYsdmG24zZhSAo2KjYpyBAKSDYqNmB2LHYs9iq24zYr9iMINii24zYr9uMINi52K/Yr9uMICgtMTAwLi4uKSDYqNmB2LHYs9iq24zYryDbjNinINuM2qkg2b7Ys9iqINin2LIg2KLZhiDaqdin2YbYp9mEL9qv2LHZiNmHINmB2YjYsdmI2KfYsdivINqp2YbbjNivLg==") });
      return true;
    }
    const _0x030 = await _0x064(_0x01c, _dec("Z2V0Q2hhdA=="), { chat_id: _0x011 });
    if (!_0x030.ok) {
      await _0x048(_0x01c, _0x010, { text: _dec("4p2MINin2LfZhNin2LnYp9iqINm+24zYr9inINmG2LTYry4g2YXYt9mF2KbZhiDYtNmI24zYryDYsdio2KfYqiDYr9ixINii2YYg2qnYp9mG2KfZhC/ar9ix2YjZhyAo2KrYsdis24zYrdin2Ysg2KjZhyDYudmG2YjYp9mGINin2K/ZhduM2YYpINi52LbZiCDYp9iz2Kou") });
      await _0x013(_0x01c, _0x01f.id);
      return true;
    }
    const _0x00f = _0x030.result;
    let _0x038 = _0x00f.username ? `https://t.me/${_0x00f.username}` : null;
    if (!_0x038) {
      try {
        const _0x031 = await _0x064(_0x01c, _dec("ZXhwb3J0Q2hhdEludml0ZUxpbms="), { chat_id: _0x00f.id });
        if (_0x031.ok) _0x038 = _0x031.result;
      } catch (_0x01a) {}
    }
    if (!_0x038) {
      await _0x05d(_0x01c, _0x01f.id, { step: _dec("bG9ja19hd2FpdGluZ19saW5r"), data: { chat_id: _0x00f.id, title: _0x00f.title || _0x00f.first_name } });
      await _0x048(_0x01c, _0x010, { text: _dec("8J+UlyDZhNuM2YbaqSDYudmF2YjZhduML9iv2LnZiNiqINm+24zYr9inINmG2LTYry4g2YTYt9mB2Kcg2YTbjNmG2qkg2K/YudmI2Kog2KfbjNmGINqp2KfZhtin2YQv2q/YsdmI2Ycg2LHYpyDYp9ix2LPYp9mEINqp2YbbjNivICjYsdio2KfYqiDYqNin24zYryDYrdmCIMKr2K/YudmI2Kog2KfYudi22KfCuyDYsdinINiv2KfYtNiq2Ycg2KjYp9i02K8g24zYpyDYrtmI2K/Yqtin2YYg2YTbjNmG2qkg2LHYpyDYqNiz2KfYstuM2K8g2Ygg2KjZgdix2LPYqtuM2K8pLg==") });
      return true;
    }
    const _0x03a = await _0x022(_0x01c);
    _0x03a.push({ id: _0x05e(), chat: String(_0x00f.id), title: _0x00f.title || _0x00f.first_name || _0x011, username: _0x00f.username || null, link: _0x038, enabled: true });
    await _0x054(_0x01c, _0x03a);
    await _0x013(_0x01c, _0x01f.id);
    await _0x048(_0x01c, _0x010, { text: `✅ قفل با موفقیت اضافه شد: ${_0x00f.title || _0x00f.first_name}` });
    return true;
  }

  if (_0x060.step === _dec("bG9ja19hd2FpdGluZ19saW5r")) {
    const _0x038 = (_0x03f.text || _dec("")).trim();
    if (!_0x038.startsWith(_dec("aHR0cA=="))) {
      await _0x048(_0x01c, _0x010, { text: _dec("4pqg77iPINmE2LfZgdinINuM2qkg2YTbjNmG2qkg2YXYudiq2KjYsSAo2LTYsdmI2LnigIzYtNiv2Ycg2KjYpyBodHRwKSDYp9ix2LPYp9mEINqp2YbbjNivLg==") });
      return true;
    }
    const _0x03a = await _0x022(_0x01c);
    _0x03a.push({ id: _0x05e(), chat: String(_0x060.data.chat_id), title: _0x060.data.title, username: null, link: _0x038, enabled: true });
    await _0x054(_0x01c, _0x03a);
    await _0x013(_0x01c, _0x01f.id);
    await _0x048(_0x01c, _0x010, { text: `✅ قفل با موفقیت اضافه شد: ${_0x060.data.title}` });
    return true;
  }

  if (_0x060.step === _dec("YWRfYXdhaXRpbmdfY29udGVudA==")) {
    const _0x006 = await _0x021(_0x01c);
    if (_0x060.data.mode === _dec("dGV4dA==")) {
      const _0x015 = (_0x03f.text || _dec("")).trim();
      if (!_0x015) {
        await _0x048(_0x01c, _0x010, { text: _dec("4pqg77iPINiq2KjZhNuM2Log2YXYqtmG24wg2KjYp9uM2K8g2LTYp9mF2YQg2YXYqtmGINio2KfYtNivLiDZhNi32YHYpyDZgdmC2Lcg2YXYqtmGINin2LHYs9in2YQg2qnZhtuM2K8u") });
        return true;
      }
      _0x006.push({ id: _0x05e(), mode: _dec("dGV4dA=="), content: _0x015, enabled: true, created: Date.now() });
    } else {
      _0x006.push({ id: _0x05e(), mode: _0x060.data.mode, from_chat_id: _0x010, message_id: _0x03f.message_id, enabled: true, created: Date.now() });
    }
    await _0x053(_0x01c, _0x006);
    await _0x013(_0x01c, _0x01f.id);
    await _0x048(_0x01c, _0x010, {
      text:
        _0x060.data.mode === _dec("dGV4dA==")
          ? _dec("4pyFINiq2KjZhNuM2Log2YXYqtmG24wg2KjYpyDZhdmI2YHZgtuM2Kog2LDYrtuM2LHZhyDYtNivINmIINin2LIg2KfbjNmGINm+2LMg2LLbjNixINmF2KrZhiDCq9in2LfZhNin2LnYp9iqINuM2KfZgdiq4oCM2LTYr9mHwrsg2YbZhdin24zYtCDYr9in2K/ZhyDZhduM4oCM2LTZiNivLg==")
          : _dec("4pyFINiq2KjZhNuM2Log2KjYpyDZhdmI2YHZgtuM2Kog2LDYrtuM2LHZhyDYtNivINmIINin2LIg2KfbjNmGINm+2LMg2LLbjNixINmH2LEg2KLbjNiv24wg2b7bjNiv2Kcg2LTYr9mHINio2YfigIzYtdmI2LHYqiDZvtuM2KfZhSDYrNiv2Kcg2YbZhdin24zYtCDYr9in2K/ZhyDZhduM4oCM2LTZiNivLg=="),
    });
    return true;
  }

  if (_0x060.step === _dec("YnJvYWRjYXN0X2F3YWl0aW5nX2NvbnRlbnQ=")) {
    await _0x013(_0x01c, _0x01f.id);
    await _0x048(_0x01c, _0x010, { text: _dec("4o+zINin2LHYs9in2YQg2YfZhdqv2KfZhtuMINi02LHZiNi5INi02K/YjCDYp9uM2YYg2LnZhdmE24zYp9iqINmF2YXaqdmGINin2LPYqiDahtmG2K8g2K/ZgtuM2YLZhyDYt9mI2YQg2Kjaqdi02K8uLi4=") });
    const _0x02f = await _0x039(_0x01c);
    let _0x042 = 0,
      _0x01d = 0;
    for (const _0x069 of _0x02f) {
      try {
        if (_0x060.data.mode === _dec("Zm9yd2FyZA==")) {
          await _0x064(_0x01c, _dec("Zm9yd2FyZE1lc3NhZ2U="), { chat_id: _0x069, from_chat_id: _0x010, message_id: _0x03f.message_id });
        } else {
          await _0x064(_0x01c, _dec("Y29weU1lc3NhZ2U="), { chat_id: _0x069, from_chat_id: _0x010, message_id: _0x03f.message_id });
        }
        _0x042++;
      } catch (_0x01a) {
        _0x01d++;
      }
    }
    await _0x048(_0x01c, _0x010, { text: `📣 ارسال همگانی به پایان رسید.\n✅ موفق: ${_0x042}\n❌ ناموفق: ${_0x01d}` });
    return true;
  }

  return false;
}

// ---------------------------------------------------------------------
// Update handlers
// ---------------------------------------------------------------------
async function _0x029(_0x03f, _0x01c) {
  const _0x010 = _0x03f.chat.id;
  const _0x01f = _0x03f.from;
  if (!_0x01f) return;

  // group / channel: simple /id command works for anyone
  if (_0x03f.chat.type !== _dec("cHJpdmF0ZQ==")) {
    if (_0x03f.text && _0x03f.text.startsWith(_dec("L2lk"))) {
      await _0x064(_0x01c, _dec("c2VuZE1lc3NhZ2U="), {
        chat_id: _0x010,
        text: `🆔 آیدی عددی این ${_0x03f.chat.type === _dec("Y2hhbm5lbA==") ? _dec("2qnYp9mG2KfZhA==") : _dec("2q/YsdmI2Yc=")}:\n<code>${_0x010}</code>${_0x03f.chat.username ? `\n@${_0x03f.chat.username}` : _dec("")}`,
        parse_mode: _dec("SFRNTA=="),
      });
    }
    return;
  }

  let _0x06d = await _0x026(_0x01c, _0x01f.id);
  if (!_0x06d) {
    _0x06d = { id: _0x01f.id, username: _0x01f.username || null, first_name: _0x01f.first_name || _dec(""), lang: null, joined: Date.now() };
  } else {
    _0x06d.username = _0x01f.username || null;
    _0x06d.first_name = _0x01f.first_name || _dec("");
  }
  await _0x055(_0x01c, _0x06d);

  const _0x063 = (_0x03f.text || _dec("")).trim();
  const _0x004 = _0x032(_0x01c, _0x01f.id);

  if (_0x063 === _dec("L2xhbmc=")) {
    await _0x058(_0x01c, _0x010);
    return;
  }

  if (!_0x06d.lang) {
    await _0x058(_0x01c, _0x010);
    return;
  }
  const _0x037 = _0x06d.lang;

  // admin multi-step flows take priority
  if (_0x004) {
    const _0x060 = await _0x024(_0x01c, _0x01f.id);
    if (_0x060) {
      const _0x02c = await _0x027(_0x01c, _0x03f, _0x060, _0x01f);
      if (_0x02c) return;
    }
  }

  if (_0x063 === _dec("L2FkbWlu")) {
    if (!_0x004) {
      await _0x048(_0x01c, _0x010, { text: _dec("4puU77iPINi02YXYpyDYqNmHINin24zZhiDYqNiu2LQg2K/Ys9iq2LHYs9uMINmG2K/Yp9ix24zYry4=") });
      return;
    }
    await _0x057(_0x01c, _0x010);
    return;
  }

  // lock check for normal users
  if (!_0x004) {
    const _0x06a = await _0x025(_0x01c, _0x01f.id);
    if (_0x06a.length > 0) {
      await _0x059(_0x01c, _0x010, _0x037, _0x06a);
      return;
    }
  }

  if (_0x063 === _dec("L3N0YXJ0") || _0x063 === _dec("")) {
    await _0x05a(_0x01c, _0x010, _0x037, _0x004, null, null, true);
    return;
  }

  if (_0x063 === _dec("L215aWQ=")) {
    await _0x048(_0x01c, _0x010, { text: await _0x007(_0x01c, _0x00c(_0x037, _0x01f)), parse_mode: _dec("SFRNTA==") });
    await _0x056(_0x01c, _0x010);
    return;
  }

  if (_0x03f.forward_from || _0x03f.forward_from_chat || _0x03f.forward_sender_name) {
    if (_0x03f.forward_from) {
      await _0x048(_0x01c, _0x010, { text: await _0x007(_0x01c, _0x00c(_0x037, _0x03f.forward_from)), parse_mode: _dec("SFRNTA==") });
    } else if (_0x03f.forward_from_chat) {
      await _0x048(_0x01c, _0x010, { text: await _0x007(_0x01c, _0x00b(_0x037, _0x03f.forward_from_chat)), parse_mode: _dec("SFRNTA==") });
    } else {
      await _0x048(_0x01c, _0x010, { text: `${_0x065(_0x037, _dec("bm90X2ZvdW5k"))}\n👤 ${_0x03f.forward_sender_name}` });
      return;
    }
    await _0x056(_0x01c, _0x010);
    return;
  }

  if (_0x03f.contact && _0x03f.contact.user_id) {
    await _0x048(_0x01c, _0x010, {
      text: await _0x007(
        _0x01c,
        _0x00c(_0x037, { id: _0x03f.contact.user_id, first_name: _0x03f.contact.first_name, last_name: _0x03f.contact.last_name, username: null })
      ),
      parse_mode: _dec("SFRNTA=="),
    });
    await _0x056(_0x01c, _0x010);
    return;
  }

  if (_0x063.startsWith(_dec("QA==")) || _0x063.includes(_dec("dC5tZS8="))) {
    let _0x06f = _0x063.startsWith(_dec("QA==")) ? _0x063 : _dec("QA==") + _0x063.split(_dec("dC5tZS8="))[1].split(/[/?]/)[0];
    try {
      const _0x04e = await _0x064(_0x01c, _dec("Z2V0Q2hhdA=="), { chat_id: _0x06f });
      if (_0x04e.ok) {
        const _0x049 = _0x04e.result;
        const _0x009 = _0x049.type === _dec("cHJpdmF0ZQ==") ? _0x00c(_0x037, _0x049) : _0x00b(_0x037, _0x049);
        await _0x048(_0x01c, _0x010, { text: await _0x007(_0x01c, _0x009), parse_mode: _dec("SFRNTA==") });
        await _0x056(_0x01c, _0x010);
      } else {
        await _0x048(_0x01c, _0x010, { text: _0x065(_0x037, _dec("bm90X2ZvdW5k")) });
      }
    } catch (_0x01a) {
      await _0x048(_0x01c, _0x010, { text: _0x065(_0x037, _dec("bm90X2ZvdW5k")) });
    }
    return;
  }

  await _0x05a(_0x01c, _0x010, _0x037, _0x004);
}

async function _0x028(_0x00e, _0x01c) {
  const _0x01f = _0x00e.from;
  const _0x010 = _0x00e.message.chat.id;
  const _0x018 = _0x00e.data || _dec("");
  let _0x06d = await _0x026(_0x01c, _0x01f.id);
  if (!_0x06d) {
    _0x06d = { id: _0x01f.id, username: _0x01f.username || null, first_name: _0x01f.first_name || _dec(""), lang: null, joined: Date.now() };
    await _0x055(_0x01c, _0x06d);
  }
  const _0x004 = _0x032(_0x01c, _0x01f.id);

  await _0x064(_0x01c, _dec("YW5zd2VyQ2FsbGJhY2tRdWVyeQ=="), { callback_query_id: _0x00e.id });
  const _0x01b = _0x00e.message.message_id;

  if (_0x018.startsWith(_dec("bGFuZ19zZXRf"))) {
    const _0x014 = _0x018.replace(_dec("bGFuZ19zZXRf"), _dec(""));
    _0x06d.lang = _0x014;
    await _0x055(_0x01c, _0x06d);
    await _0x05a(_0x01c, _0x010, _0x014, _0x004, _0x01b, _0x065(_0x014, _dec("bGFuZ19zYXZlZA==")));
    return;
  }

  const _0x037 = _0x06d.lang || _dec("ZW4=");

  if (_0x018 === _dec("bG9ja19jaGVjaw==")) {
    const _0x06a = await _0x025(_0x01c, _0x01f.id);
    if (_0x06a.length === 0) {
      await _0x05a(_0x01c, _0x010, _0x037, _0x004, _0x01b, _0x065(_0x037, _dec("am9pbmVkX29r")));
    } else {
      await _0x059(_0x01c, _0x010, _0x037, _0x06a, _0x01b, _0x065(_0x037, _dec("c3RpbGxfbG9ja2Vk")));
    }
    return;
  }

  if (_0x018 === _dec("YWN0X215aWQ=")) {
    await _0x048(_0x01c, _0x010, { text: await _0x007(_0x01c, _0x00c(_0x037, _0x01f)), parse_mode: _dec("SFRNTA==") }, _0x01b);
    await _0x056(_0x01c, _0x010);
    return;
  }
  if (_0x018 === _dec("YWN0X2hlbHA=")) {
    await _0x048(_0x01c, _0x010, { text: _0x065(_0x037, _dec("aGVscF90ZXh0")) }, _0x01b);
    return;
  }

  // ---- admin-only callbacks below ----
  if (!_0x004) return;

  if (_0x018 === _dec("YWRtaW5fbWVudQ==")) return _0x057(_0x01c, _0x010, _0x01b);

  if (_0x018 === _dec("YWRtaW5fc3RhdHM=")) {
    await _0x048(_0x01c, _0x010, { text: await _0x04c(_0x01c), reply_markup: { inline_keyboard: [[{ text: _dec("4qyF77iPINio2KfYstqv2LTYqg=="), callback_data: _dec("YWRtaW5fbWVudQ==") }]] } }, _0x01b);
    return;
  }

  if (_0x018 === _dec("YWRtaW5fbG9ja3M=") || _0x018.startsWith(_dec("bG9ja190b2dnbGVf")) || _0x018.startsWith(_dec("bG9ja19kZWxf"))) {
    if (_0x018.startsWith(_dec("bG9ja190b2dnbGVf"))) {
      const _0x02e = _0x018.replace(_dec("bG9ja190b2dnbGVf"), _dec(""));
      const _0x03a = await _0x022(_0x01c);
      const _0x036 = _0x03a.find((_0x073) => _0x073.id === _0x02e);
      if (_0x036) _0x036.enabled = !_0x036.enabled;
      await _0x054(_0x01c, _0x03a);
    }
    if (_0x018.startsWith(_dec("bG9ja19kZWxf"))) {
      const _0x02e = _0x018.replace(_dec("bG9ja19kZWxf"), _dec(""));
      let _0x03a = await _0x022(_0x01c);
      _0x03a = _0x03a.filter((_0x073) => _0x073.id !== _0x02e);
      await _0x054(_0x01c, _0x03a);
    }
    const _0x071 = await _0x04b(_0x01c);
    await _0x048(_0x01c, _0x010, _0x071, _0x01b);
    return;
  }

  if (_0x018 === _dec("bG9ja19hZGQ=")) {
    await _0x05d(_0x01c, _0x01f.id, { step: _dec("bG9ja19hd2FpdGluZ19pbnB1dA==") });
    await _0x048(_0x01c, _0x010, { text: _dec("4p6VINuM2YjYstix2YbbjNmFINqp2KfZhtin2YQv2q/YsdmI2YcgKNio2KcgQCnYjCDYotuM2K/bjCDYudiv2K/bjCAoLTEwMC4uLikg24zYpyDbjNqpINm+2LPYqiDZgdmI2LHZiNin2LHYr+KAjNi02K/ZhyDYp9iyINii2YYg2LHYpyDYp9ix2LPYp9mEINqp2YbbjNivOgoK4pqg77iPINio2LHYp9uMINqp2KfZhtin2YQv2q/YsdmI2Ycg2K7YtdmI2LXbjNiMINix2KjYp9iqINio2KfbjNivINiv2LEg2KLZhiDYudi22YggKNiq2LHYrNuM2K3Yp9mLINin2K/ZhduM2YYpINio2KfYtNivLg==") }, _0x01b);
    return;
  }

  if (_0x018 === _dec("YWRtaW5fYWRz") || _0x018.startsWith(_dec("YWRfdG9nZ2xlXw==")) || _0x018.startsWith(_dec("YWRfZGVsXw=="))) {
    if (_0x018.startsWith(_dec("YWRfdG9nZ2xlXw=="))) {
      const _0x02e = _0x018.replace(_dec("YWRfdG9nZ2xlXw=="), _dec(""));
      const _0x006 = await _0x021(_0x01c);
      const _0x002 = _0x006.find((_0x073) => _0x073.id === _0x02e);
      if (_0x002) _0x002.enabled = !_0x002.enabled;
      await _0x053(_0x01c, _0x006);
    }
    if (_0x018.startsWith(_dec("YWRfZGVsXw=="))) {
      const _0x02e = _0x018.replace(_dec("YWRfZGVsXw=="), _dec(""));
      let _0x006 = await _0x021(_0x01c);
      _0x006 = _0x006.filter((_0x073) => _0x073.id !== _0x02e);
      await _0x053(_0x01c, _0x006);
    }
    const _0x071 = await _0x04a(_0x01c);
    await _0x048(_0x01c, _0x010, _0x071, _0x01b);
    return;
  }

  if (_0x018 === _dec("YWRfYWRk")) {
    await _0x048(
      _0x01c,
      _0x010,
      {
        text:
          _dec("8J+ToiDZhtmI2Lkg2YbZhdin24zYtCDYqtio2YTbjNi6INix2Kcg2KfZhtiq2K7Yp9ioINqp2YbbjNivOgoK") +
          _dec("8J+UgSDZgdmI2LHZiNin2LHYrzog2b7bjNin2YUg2KjYpyDZhti02KfZhiDCq9mB2YjYsdmI2KfYsdivINi02K/ZhyDYp9iyLi4uwrsg2KfYsdiz2KfZhCDZhduM4oCM2LTZiNivLgo=") +
          _dec("8J+TnSDZvtuM2KfZhSDYs9in2K/Zhzog2YXYrdiq2YjYpyDYqNiv2YjZhiDZhti02KfZhiDZgdmI2LHZiNin2LHYryDaqdm+24wg2Ygg2KfYsdiz2KfZhCDZhduM4oCM2LTZiNivLgo=") +
          _dec("8J+SrCDZhdiq2YYg2LLbjNixINmG2KrbjNis2Yc6INuM2qkg2YXYqtmGINiq2KjZhNuM2LrYp9iq24wg2qnZhyDZh9mF24zYtNmHINiv2YLbjNmC2KfZiyDYstuM2LEgwqvYp9i32YTYp9i52KfYqiDbjNin2YHYquKAjNi02K/Zh8K7INqG2LPYqNuM2K/ZhyDZhduM4oCM2LTZiNivICjYqNiv2YjZhiDZvtuM2KfZhSDYrNiv2KcpLg=="),
        reply_markup: {
          inline_keyboard: [
            [
              { text: _dec("8J+UgSDZgdmI2LHZiNin2LHYrw=="), callback_data: _dec("YWRfbW9kZV9mb3J3YXJk") },
              { text: _dec("8J+TnSDZvtuM2KfZhSDYs9in2K/Zhw=="), callback_data: _dec("YWRfbW9kZV9jb3B5") },
            ],
            [{ text: _dec("8J+SrCDZhdiq2YYg2LLbjNixINmG2KrbjNis2Yc="), callback_data: _dec("YWRfbW9kZV90ZXh0") }],
          ],
        },
      },
      _0x01b
    );
    return;
  }
  if (_0x018 === _dec("YWRfbW9kZV9mb3J3YXJk") || _0x018 === _dec("YWRfbW9kZV9jb3B5") || _0x018 === _dec("YWRfbW9kZV90ZXh0")) {
    const _0x03d = _0x018 === _dec("YWRfbW9kZV9mb3J3YXJk") ? _dec("Zm9yd2FyZA==") : _0x018 === _dec("YWRfbW9kZV9jb3B5") ? _dec("Y29weQ==") : _dec("dGV4dA==");
    await _0x05d(_0x01c, _0x01f.id, { step: _dec("YWRfYXdhaXRpbmdfY29udGVudA=="), data: { mode: _0x03d } });
    const _0x047 = _0x03d === _dec("dGV4dA==") ? _dec("4pyP77iPINit2KfZhNinINmF2KrZhiDYqtio2YTbjNi62KfYqtuMINix2Kcg2KfYsdiz2KfZhCDaqdmG24zYryAo2YHZgti3INmF2KrZhik6") : _dec("4pyP77iPINit2KfZhNinINm+24zYp9mFINiq2KjZhNuM2LogKNmF2KrZhtiMINi52qnYs9iMINmI24zYr9uM2Ygg2YggLi4uKSDYsdinINin2LHYs9in2YQg2qnZhtuM2K86");
    await _0x048(_0x01c, _0x010, { text: _0x047 }, _0x01b);
    return;
  }

  if (_0x018 === _dec("YWRtaW5fYnJvYWRjYXN0")) {
    await _0x048(
      _0x01c,
      _0x010,
      {
        text: _dec("8J+ToyDZhtmI2Lkg2KfYsdiz2KfZhCDZh9mF2q/Yp9mG24wg2LHYpyDYp9mG2KrYrtin2Kgg2qnZhtuM2K86Cgrwn5SBINmB2YjYsdmI2KfYsdivINmH2YXar9in2YbbjDog2b7bjNin2YUg2KjYpyDZhti02KfZhiDCq9mB2YjYsdmI2KfYsdivINi02K/ZhyDYp9iyLi4uwrsg2KjZhyDZh9mF2Ycg2KfYsdiz2KfZhCDZhduM4oCM2LTZiNivLgrwn5OdINm+24zYp9mFINmH2YXar9in2YbbjDog2YXYrdiq2YjYpyDYqNiv2YjZhiDZhti02KfZhiDZgdmI2LHZiNin2LHYryDYqNmHINmH2YXZhyDaqdm+24wg2YXbjOKAjNi02YjYry4="),
        reply_markup: { inline_keyboard: [[{ text: _dec("8J+UgSDZgdmI2LHZiNin2LHYryDZh9mF2q/Yp9mG24w="), callback_data: _dec("YmNfbW9kZV9mb3J3YXJk") }, { text: _dec("8J+TnSDZvtuM2KfZhSDZh9mF2q/Yp9mG24w="), callback_data: _dec("YmNfbW9kZV9jb3B5") }]] },
      },
      _0x01b
    );
    return;
  }
  if (_0x018 === _dec("YmNfbW9kZV9mb3J3YXJk") || _0x018 === _dec("YmNfbW9kZV9jb3B5")) {
    const _0x03d = _0x018 === _dec("YmNfbW9kZV9mb3J3YXJk") ? _dec("Zm9yd2FyZA==") : _dec("Y29weQ==");
    await _0x05d(_0x01c, _0x01f.id, { step: _dec("YnJvYWRjYXN0X2F3YWl0aW5nX2NvbnRlbnQ="), data: { mode: _0x03d } });
    await _0x048(_0x01c, _0x010, { text: _dec("4pyP77iPINit2KfZhNinINmF2K3YqtmI2KfbjCDZvtuM2KfZhSDZh9mF2q/Yp9mG24wg2LHYpyDYp9ix2LPYp9mEINqp2YbbjNivOg==") }, _0x01b);
    return;
  }
}

async function _0x02a(_0x03b, _0x01c) {
  const _0x00f = _0x03b.chat;
  const _0x041 = _0x03b.new_chat_member && _0x03b.new_chat_member.status;
  if ([_dec("bWVtYmVy"), _dec("YWRtaW5pc3RyYXRvcg==")].includes(_0x041)) {
    const _0x063 =
      `🆕 ربات به یک ${_0x00f.type === _dec("Y2hhbm5lbA==") ? _dec("2qnYp9mG2KfZhA==") : _dec("2q/YsdmI2Yc=")} اضافه شد:\n` +
      `📛 عنوان: ${_0x00f.title}\n` +
      `${_0x00f.username ? _dec("8J+UlyDbjNmI2LLYsdmG24zZhTogQA==") + _0x00f.username + _dec("Cg==") : _dec("")}` +
      `🆔 آیدی عددی: <code>${_0x00f.id}</code>`;
    for (const _0x005 of _0x020(_0x01c)) {
      try {
        await _0x064(_0x01c, _dec("c2VuZE1lc3NhZ2U="), { chat_id: _0x005, text: _0x063, parse_mode: _dec("SFRNTA==") });
      } catch (_0x01a) {}
    }
  }
}

async function _0x02b(_0x06b, _0x01c) {
  try {
    if (_0x06b.message) await _0x029(_0x06b.message, _0x01c);
    else if (_0x06b.callback_query) await _0x028(_0x06b.callback_query, _0x01c);
    else if (_0x06b.my_chat_member) await _0x02a(_0x06b.my_chat_member, _0x01c);
  } catch (_0x01a) {
    console.log(_dec("aGFuZGxlVXBkYXRlIGVycm9y"), _0x01a);
  }
}

// ---------------------------------------------------------------------
// Worker entry point
// ---------------------------------------------------------------------
export default {
  async fetch(_0x04d, _0x01c, _0x016) {
    if (!_0x01c.BOT_TOKEN) return new Response(_dec("Qk9UX1RPS0VOINiq2YbYuNuM2YUg2YbYtNiv2Ycg2KfYs9iqLg=="), { status: 500 });

    if (_0x04d.method === _dec("R0VU")) {
      const _0x06c = new URL(_0x04d.url);
      const _0x072 = `${_0x06c.origin}/`;
      const _0x04e = await _0x064(_0x01c, _dec("c2V0V2ViaG9vaw=="), { url: _0x072, allowed_updates: [_dec("bWVzc2FnZQ=="), _dec("Y2FsbGJhY2tfcXVlcnk="), _dec("bXlfY2hhdF9tZW1iZXI=")] });
      return new Response(
        `<html><body style="font-family:sans-serif;direction:rtl;text-align:center;padding:40px">
          <h2>${_0x04e.ok ? _dec("4pyFIFdlYmhvb2sg2KjYpyDZhdmI2YHZgtuM2Kog2KrZhti424zZhSDYtNiv") : _dec("4p2MINiu2LfYpyDYr9ixINiq2YbYuNuM2YUgV2ViaG9vaw==")}</h2>
          <p>${_0x072}</p>
          <pre style="text-align:left;background:#f4f4f4;padding:10px;border-radius:8px">${JSON.stringify(_0x04e, null, 2)}</pre>
        </body></html>`,
        { headers: { 'Content-Type': _dec("dGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04") } }
      );
    }

    if (_0x04d.method === _dec("UE9TVA==")) {
      let _0x06b;
      try {
        _0x06b = await _0x04d.json();
      } catch (_0x01a) {
        return new Response(_dec("T0s="));
      }
      _0x016.waitUntil(_0x02b(_0x06b, _0x01c));
      return new Response(_dec("T0s="));
    }

    return new Response(_dec("T0s="));
  },
};
