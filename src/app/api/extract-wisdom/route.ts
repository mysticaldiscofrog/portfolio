import { exec } from 'child_process';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { url }: { url: string } = await req.json();
    const ytCommand = `yt --transcript ${url}`;
    const wisdomCommand = `fabric --stream --pattern extract_wisdom`;

    try {
        const ytResult = await new Promise<string>((resolve, reject) => {
            exec(ytCommand, { encoding: 'utf-8' }, (error, stdout, stderr) => {
                if (error) {
                    reject(stderr);
                } else {
                    resolve(stdout);
                }
            });
        });

        const wisdomResult = await new Promise<string>((resolve, reject) => {
            const wisdomProcess = exec(wisdomCommand, { encoding: 'utf-8' }, (error, stdout, stderr) => {
                if (error) {
                    reject(stderr);
                } else {
                    resolve(stdout);
                }
            });

            if (wisdomProcess.stdin) {
                wisdomProcess.stdin.write(ytResult);
                wisdomProcess.stdin.end();
            }
        });

        return NextResponse.json({ result: wisdomResult }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
