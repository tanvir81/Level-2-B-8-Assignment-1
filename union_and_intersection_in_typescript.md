### Union and Intersection Types in TypeScript

we can combined types in TypeScript using two operators: union (|) and intersection (&).
A union means"one of this type", like OR. An intersection means "all of these Type Together",
like AND.Using them together helps us model real data clearly

imagine an API response.Every response has a requestId and a timestamp.A success response also
carries data, while an error response carries an errorMessage.
here is an exemple

```typescript
type Metadata = {
  requestId: string;
  timestamp: number;
};

type Success = { status: "success"; data: string };
type Failure = { status: "error"; errorMessage: string };

type ApiResponse = Metadata & (Success | Failure);
```

Here, every ApiResponse must have the metadata,and it must be also be either a success or failure.
the status field tells TypeScript which one we have,so it can nerrow they type for us.

```typescript
function handle(res: ApiResponse) {
  if (res.status === "success") {
    console.log(res.data);
  }
}
```

inside the if block, res.data is safe to use.if we try to use res.data in the error case,
Typescript gives a compile error

in conculation, Combining unions and intersection let us share common fields and still handle diffrent outcomes.This keeps code
short and prevents mistake with invalid data.
