import type { TFunction } from "i18next";

export function getMailtoUrl(t: TFunction<"translation, undefined">) {
  const emailData = {
    to: t('quotation.email.to'),
    subject: t('quotation.email.subject'),
    body: t('quotation.email.body')
  };
  
  return `mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
}
