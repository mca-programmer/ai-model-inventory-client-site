// src/utils/imgbb.js
export async function uploadToImgBB(file) {
  if (!file) throw new Error("No file provided");

  const key = import.meta.env.VITE_IMGBB_KEY;
  if (!key) throw new Error("ImgBB key not found in env");

  const form = new FormData();
  form.append("image", file);

  try {
    const res = await fetch(`https://api.imgbb.com/1/upload?key=${key}`, {
      method: "POST",
      body: form,
    });
    const data = await res.json();
    if (!data.success) throw new Error("ImgBB upload failed");
    return data.data.display_url; // 
  } catch (err) {
    console.error("ImgBB upload error:", err);
    throw err;
  }
}
