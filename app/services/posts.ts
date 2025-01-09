import { supabase } from "../login/supabaseClient";

// Crear un nuevo post
export async function createPost(title: string, content: string) {
  const { data, error } = await supabase
    .from("posts")
    .insert([{ title, content }]);

  if (error) throw error;
  return data;
}

// Leer todos los posts
export async function getPosts() {
  const { data, error } = await supabase.from("posts").select("*");
  if (error) throw error;
  return data;
}

// Leer un post por ID
export async function getPostById(id: number) {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
}

// Actualizar un post
export async function updatePost(id: number, title: string, content: string) {
  const { data, error } = await supabase
    .from("posts")
    .update({ title, content })
    .eq("id", id);

  if (error) throw error;
  return data;
}

// Eliminar un post
export async function deletePost(id: number) {
  const { data, error } = await supabase.from("posts").delete().eq("id", id);

  if (error) throw error;
  return data;
}
