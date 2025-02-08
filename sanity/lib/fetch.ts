import { createClient } from "next-sanity";
import { create } from "node:domain";
import { projectId } from "../env";

 const client = createClient ({
    projectId : 'eywckf5j',
    dataset : 'production',
    useCdn : true,
    apiVersion : '2025-01-15',
});
// import { client } from 'sanity'; // Ensure you have imported the Sanity client

export async function sanityFetch({ query, params }: { query: string; params?: Record<string, any> }) {
    return await client.fetch(query, params);
}