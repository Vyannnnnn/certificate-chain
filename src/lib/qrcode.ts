import QRCode from "qrcode";

export async function generateQRCode(certificateNumber: string) {
  const verifyUrl = `${process.env.NEXT_PUBLIC_APP_URL}/verify/${certificateNumber}`;

  return QRCode.toDataURL(verifyUrl, {
    errorCorrectionLevel: "H",
    type: "image/png",
  });
}
