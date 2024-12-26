import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/stocks/submit-button";
import RootLayout from "@/layout";
import { Post } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";


export default function EditPostForm({ post }: { post: Post }) {
    const { data, setData, put, processing, errors } = useForm({
        title: post.title,
        slug: post.slug,
        content: post.content,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route("posts.update", post.id));
    }
    return (
        <RootLayout>
            <Head title="Edit Post" />
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Edit Post</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit} className="space-y-4" noValidate>
                        <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                name="title"
                                placeholder="Enter your blog post title"
                                value={data.title}
                                onChange={(e) => setData("title", e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="slug">Slug</Label>
                            <Input
                                id="slug"
                                name="slug"
                                placeholder="Enter tags and press Enter"
                                value={data.slug}
                                onChange={(e) => setData("slug", e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="content">Content</Label>
                            <Textarea
                                id="content"
                                name="content"
                                placeholder="Write your blog post content here"
                                value={data.content}
                                onChange={(e) => setData("content", e.target.value)}
                                required
                                className="min-h-[200px]"
                            />
                        </div>
                        <div className="flex justify-between pt-4">
                            <SubmitButton
                                pending={processing}
                                submitting={"Post is updating"}
                                submit={"Update Post"}
                            />
                        </div>
                    </form>
                </CardContent>
            </Card>
        </RootLayout>
    );
}