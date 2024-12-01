"use client"
import { fetchPost, fetchPostById } from "@/api/blog"
import { useQuery } from "@tanstack/react-query"

export const useFetchPost= ()=>{
    return useQuery({
        queryKey: ["posts"],
        queryFn: ()=>fetchPost(),
    })
}


export const useFetchPostById = (id: number)=>{
    console.log(`Id passed is ${id}`)
    return useQuery({
        queryKey:["posts", id],
        queryFn: ()=>fetchPostById(id)
    })
}