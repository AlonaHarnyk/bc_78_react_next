function foo<T>(arr: T[]): T[] {
    return arr.reverse();
}

// console.log(foo<number>([1, 2, 3]));
// console.log(foo<string>(["qwe", "rty", "abc"]));

function foo1<T>(array: T[]): T {
    const lastIdx = array.length - 1;
    return array[lastIdx];
}
// console.log(foo1<number>([1, 2, 3]));
// console.log(foo1<string | number>([22, "qwe"]));

// function foo2<T, Y>(a: T, b: Y): void {
//     console.log(a);
//     console.log(b);
// }
// foo2<number, string>(25, "foo2");
// foo2<string, number>("banana", 100);

interface HttpResponse<T> {
    data: T;
    statusCode: number;
    message: string;
}

interface HttpGetData {
    id: number;
    surname: string;
}

interface HttpPostData {
    id: number;
    name: string;
    email: string;
}

const getResponse: HttpResponse<HttpGetData> = {
    data: {
        id: 200,
        surname: "Alisenko",
    },
    statusCode: 200,
    message: "success",
};

const postResponse: HttpResponse<HttpPostData> = {
    data: {
        id: 300,
        name: "Alina",
        email: "test2@gmail.com",
    },
    statusCode: 201,
    message: "created",
};

function getLength<T extends { length: number }>(a: T): number {
    return a.length;
}
getLength("string");
// getLength(5)

function getName<T extends { name: string }>(user: T): string {
    return user.name;
}

getName({ name: "Ann", age: 20 });
getName({ name: "John", id: 20 });
getName({ name: "John", weight: 70, height: 175 });
getName({ username: "John" }); // error
